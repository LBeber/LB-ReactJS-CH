# Ceramic Room

- Ceramic Room es un e-commerce donde se ofrecen productos artesanales de cerámica
- Se realizó con React JS, JSX, Sass y Bootstrap como framework.


------------

###Guía para el desarrollador

- [Instalación](#Instalación)
	- [Componentes](#Componentes)
- [Conectando Firebase](#Conectando Firebase)
	- [Carga de productos](#Carga de productos)
	- [Órdenes](#Órdenes)
	- [Peticiones](#Peticiones)



------------
###Instalación


-	 Instalar todas las dependencias utilizadas con el comando:

`$ npm install`


####Componentes

- NavBar
- Home
- ItemListContainer
	- ItemList
		- Item
- ItemDetailContainer
	-	ItemDetail
- Cart
	- CartEmtpy
	- CartFull
	- CartOrder
	- CartForm
	- CartItem
	- CartFooter
- FrontPage
- Footer


- Context
	- CartContext
	- UserContext

------------
###Conectando Firebase

Archivo de Firebase:

`src/services/Firebase/Firebase.js`

Dentro del archivo están la conexión con Firebase mediante variables de entorno, las cuales están escritas en un archivo `.env`

####Carga de productos

Datos requeridos para la carga de productos:

**Nombre de colección : `products`**

| Campo  | Tipo de dato  | Descripción |
| :------------ |:---------------:| :-----:|
| id     | String | automático por Firestore |
| categoria      | String        |   Categoría a la que pertenece |
| descrip | String        |   Breve descripción del producto |
| img | String        |   Ruta a la imagen |
| nombre | String     |    Nombre del producto |
| precio | Number        |    precio del producto |
| stock | Number        |    Cantidad de unidades en stock |


**Nombre de colección : `categories`**

| Campo  | Tipo de dato  | Descripción |
| :------------ |:---------------:| :-----:|
| id     | String | nombre de la categoría. Ej: 'Novedades' |
| categorie      | String        |   Nombre que aparecerá en NavBar |

####Órdenes

La colección correspondiente a las órdenes se genera automáticamente cuando el usuario carga finaliza una compra.

Los datos que guarda son:



```javascript
 Id: (id Automático de Firestore)
{
		'buyer': 	{									 //(Obj / Datos del cliente)
					'address' (String / Dirección)
					'email' (String / Email)
					'name': (String / Nombre)
					'phone':  (String / Número de teléfono)
		}
		
		'items': [{								//(Array / Cantidad de productos)
					'cant': (Number / Unidades del mismo producto)
					'Id': (id automáticamente por Firestore)
					'categoria': (String / Categoría a la que pertenece)
					'descrip':  (String / Breve descripción del producto)
					'img': (String / Ruta a la imagen)
					'nombre': (String / Nombre del producto)
					'precio': (Number / precio del producto)
					'stock' (Number / Cantidad de unidades en stock)
					'subTotal' (Number / Subtotal del producto)
			}]
		
		'total':  							//(String / Total de la compra)

}
```

####Peticiones

La función ** getItems**  trae todos los productos cargados en la categoría **products**

La función **getItemById** trae el producto seleccionado para ver detalle

La función **updateProduct** genera un Update de la colección y si hay stock genera un nuevo documento en la categoría  **orders**

