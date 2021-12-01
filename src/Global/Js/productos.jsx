import plato from './img/plato.jpg'
import taza from './img/taza.jpg'
import bandeja from './img/bandeja.jpg'

const productos = [
    {id: 1, nombre: "Plato", descrip: "Diámetro: 30cm",precio: "$789,00", img:"https://i.etsystatic.com/18885482/r/il/18b2a0/2907122257/il_794xN.2907122257_bv9b.jpg", stock:10},
    {id: 2, nombre: "Taza", descrip: "Alto: 13cm | Diámetro: 10cm", precio: "$449,00", img:"https://i.etsystatic.com/18885482/r/il/fed211/3032677106/il_794xN.3032677106_5p6u.jpg", stock:14},
    {id: 3, nombre: "Bandeja", descrip: "Largo: 25cm | Ancho: 15cm",precio: "$839,00", img:"https://i.etsystatic.com/18885482/r/il/4d911b/3137611417/il_794xN.3137611417_mv9n.jpg", stock:6}
]

export const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }
    )
}