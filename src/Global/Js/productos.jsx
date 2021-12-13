const productos = [
    {
        id: 1, 
        nombre: 'Plato', 
        descrip: 'Perteneciente a la colección Yuri-Kasaf presentada en Enero de 2021 en la ciudad de Amsterdam, Holanda', diametro: '30cm', 
        alto: '2cm', 
        precio: '$789,00', 
        img:'../media/plato.jpg', 
        stock:10,
        categoria: 'novedades'
    },
    {
        id: 2, 
        nombre: 'Taza', 
        descrip: 'Taza bicolor con pecas negras. Diseñada por Josef Claurié, parte de la colección Marin-Maré.', diametro:'7cm', 
        alto:'13cm', 
        precio: '$449,00', 
        img:'../media/taza.jpg', 
        stock:14,
        categoria: 'oferta'
    },
    {
        id: 3, 
        nombre: 'Bandeja', 
        descrip: 'Bandeja ovalada color beige. De la colección Pazué, diseñada y fabricada por María Mornier',
        diametro: '25cm',
        alto: "3cm",
        precio: '$839,00', 
        img:'../media/bandeja.jpg', 
        stock:6,
        categoria: 'novedades'
    },
    {
        id: 4, 
        nombre: 'Vasos', 
        descrip: 'Set de vasos color blanco opaco. Diseño especial realizado por el artista Mario Arcoza, presentado en Buenos Aires, Argentina en 2019',
        diametro: '8cm',
        alto: '12cm',
        precio: '$229,00', 
        img:'../media/vasos.jpg', 
        stock:16,
        categoria: 'ofertas'
    },
    {
        id: 5, 
        nombre: 'Bandeja', 
        descrip: 'Set de bandejas altas, de la colección Jeüel de Josuá Marinho',
        diametro: '22cm',
        alto: '6cm',
        precio: '$1219,00', 
        img:'../media/bandeja_1.jpg', 
        stock:4,
        categoria: 'novedades'
    },
    {
        id: 6, 
        nombre: 'Compoteros', 
        descrip: 'Set de 4 compoteros con ranura. Diseñados y fabricados por Marga Moreno, parte de la colección Colombá', 
        diametro: '15cm',
        alto: '5cm',
        precio: '$356,00', 
        img:'../media/compoteros.jpg', 
        stock:16,
        categoria: 'novedades'
    },
    {
        id: 7, 
        nombre: 'Juego', 
        descrip: 'Largo: 25cm | Ancho: 15cm',
        diametro: '30cm',
        alto: '15cm',
        precio: '$1499,00', 
        img:'../media/juego.jpg', 
        stock:3,
        categoria: 'novedades'
    },
    {
        id: 8, 
        nombre: 'Vasos', 
        descrip: 'Alto: 13cm | Diámetro: 7cm',
        diametro: 'Vasos color gris en degradé rústico. Set por 2 unidades. Edición especial del artista Manuel Jorsi',
        alto: '10cm',
        precio: '$199,00', 
        img:'../media/vasos_1.jpg', 
        stock:20,
        categoria: 'ofertas'
    } 
]

/* const producto = {
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
} */


export const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }
    )
}

export const getProductoById = (id) =>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const producto = productos.find(prod => parseInt(prod.id) === parseInt(id))
            resolve(producto)
        }, 2000)
    }
    )
}

export const getProductosByCategory = (category) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const listProductos = productos.filter(prod => prod.categoria === category)
            console.log(listProductos);
            resolve(listProductos)
            
        }, 2000)
    })
}

