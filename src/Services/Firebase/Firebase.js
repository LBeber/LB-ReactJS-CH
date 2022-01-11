import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
  collection,
  getDocs, 
  query, 
  where, 
  getDoc, 
  doc, 
  writeBatch,
  addDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.RACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };


const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const getItems = (key, operator, value) =>{
  return new Promise((resolve, reject) =>{

        ( async () => {
          
            const collectionQuery = key && operator && value
                                  ? (query(collection(db, 'products'), where(key, operator, value)))
                                  : (collection(db, 'products'))

            try{
                const querySnapshot = await getDocs(collectionQuery)
                const listItems = querySnapshot.docs.map(doc =>{
                  return { id: doc.id, ...doc.data()}
                })
                resolve(listItems)
            }
            catch(error){
              reject(`Error en la consulta a la base de datos ${error}`);
            }
          })()
  })
}

export const getItemById = (value) =>{

  return new Promise((resolve, reject) =>{

    ( async () => {
  
      try{        
          const querySnapshot = await getDoc(doc(db, 'products', value))
          const productById = { id: querySnapshot.id, ...querySnapshot.data()}                        
          resolve(productById)

      } catch{
          reject('Error en la consulta a la base de datos');
      }
      })()

  })
}


export const updateProduct = (getDataCart, addItem) =>{
  
  return new Promise ((resolve, reject)=>{

    const batch = writeBatch(db)
    const noStock = []

    getDataCart.items.forEach((item) => {
      (async()=>{
          try{
              const product = await getDoc(doc(db, 'products', item.id))
              
              if (product.data().stock >= item.cant){
                  batch.update(doc(db, 'products', item.id),{
                      stock: product.data().stock - item.cant
                  })
              }
              else{
                  noStock.push({id: item.id, ...item.data()})
              }
          }
          catch{
              reject('Error');
          }
      })()
  });

  if (noStock.length === 0 || addItem.length !== 0){
      (async ()=>{
          try{
             const added = await addDoc(collection(db, 'orders'), getDataCart)
             batch.commit().then(()=>{
                  resolve(added.id)
             })
          }
          catch{
              reject('Error en update');
          }
      })()
  }

  })
}