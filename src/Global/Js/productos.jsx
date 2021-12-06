const productos = [
    {id: 1, nombre: "Plato", descrip: "Diámetro: 30cm",precio: "$789,00", img:"../media/plato.jpg", stock:10},
    {id: 2, nombre: "Taza", descrip: "Alto: 13cm | Diámetro: 10cm", precio: "$449,00", img:"../media/taza.jpg", stock:14},
    {id: 3, nombre: "Bandeja", descrip: "Largo: 25cm | Ancho: 15cm",precio: "$839,00", img:"../media/bandeja.jpg", stock:6},
    {id: 4, nombre: "Vasos", descrip: "Alto: 13cm | Diámetro: 7cm",precio: "$229,00", img:"../media/vasos.jpg", stock:16}

]


const producto = {
    id: 1, 
    nombre: "Plato", 
    descrip: 'Perteneciente a la colección Yuri-Kasaf presentada en Enero de 2021 en la ciudad de Amsterdam, Holanda. Díametro: 30cm. Alto: 2cm',
    precio: "$789,00", 
    img:"../media/plato.jpg", 
    stock: 10,
    rel:  [ {id:'1', img:"../media/relBandejas.jpg"},
            {id:'2', img:"../media/relCompoteros.jpg"},
            {id:'3', img:"../media/relJuego.jpg"},
            {id:'4', img:"../media/relVasos.jpg"}, 
    ] 
}


export const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }
    )
}

export const getProductoDetail = () =>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(producto)
        }, 2000)
    }
    )
}

