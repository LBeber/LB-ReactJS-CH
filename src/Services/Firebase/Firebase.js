import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTSqOqRkjUUewLSxDs0wZbDUpzqNLroqw",
    authDomain: "ceramic-room.firebaseapp.com",
    projectId: "ceramic-room",
    storageBucket: "ceramic-room.appspot.com",
    messagingSenderId: "7196003385",
    appId: "1:7196003385:web:36f89c70c470eacd0e91e8"
  };


const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app)