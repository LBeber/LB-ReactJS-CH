# Ceramic Room

- Ceramic Room es un e-commerce donde se ofrecen productos artesanales de cerámica
- Se realizó con React JS, JSX, Sass y Bootstrap como framework.


------------

### Guía para el desarrollador

- [Instalación](#Instalación)
	- [Componentes](#Componentes)
	- [Logo](#Logo)
- [Firebase](#Firebase)
	- [Productos](#Productos)
		- [Imágenes](#Imágenes)
	- [Órdenes](#Órdenes)
	- [Peticiones](#Peticiones)



------------
### Instalación


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
###Firebase

Archivo de Firebase:

`src/services/Firebase/Firebase.js`

Dentro del archivo está la conexión con Firebase, deberás copiar las credenciales y alojarlas en un archivo  `.env` o directamente en el archivo Firebase.js


------------


#### Productos

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

##### Imágenes
Si se utilizarán elementos multimedia como imágenes, logos, etc., y los mismos estén dentro de las carpetas del proyecto, se sugiere ubicarlos en  `public/media/` para que la ruta en Firebase sea `../media/imagen.jpg`


------------


#### Órdenes

La colección correspondiente a las órdenes se genera automáticamente cuando el usuario carga finaliza una compra.

Los datos que guarda son:



```javascript
 Id: (id Automático de Firestore)
{
	'buyer': {		//(Obj / Datos del cliente)
		'address' (String / Dirección)
		'email' (String / Email)
		'name': (String / Nombre)
		'phone':  (String / Número de teléfono)
	}
		
	'items': [{		//(Array / Cantidad de productos)
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
	
	'total':  		//(String / Total de la compra)

}
```


------------


#### Peticiones

La función ** getItems**  trae todos los productos cargados en la categoría **products**

La función **getItemById** trae el producto seleccionado para ver detalle

La función **updateProduct** genera un Update de la colección y si hay stock genera un nuevo documento en la categoría  **orders**


------------

Diseñado y desarrollado por

>**Lucas Beber - UX/UI Designer | Frontend  developer**

> - [Linkedin](https://www.linkedin.com/in/lucas-beber/)
> - [Behance](https://www.behance.net/Lucas-Beber)

>*Todos los derechos reservados © 2022*