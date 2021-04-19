# reactjs-test

## Objetivos:

1- Crear una aplicación react (se puede utilizar [CRA](https://create-react-app.dev/))

2- Consumir API de resultado de hoteles: https://basset.free.beeceptor.com/reactjs-test/accommodations

3- Renderizar los clusters de hoteles en una listado ajustandose correctamente para mobile (diseño https://www.figma.com/file/6pc1svdak2qrGKrXCBAy10/Cluster-hoteles?node-id=1%3A357)

4- La app tiene que tener un tema de colores configurado que permita elegir el color de fondo del cluster (default: #FFFFFF) y el color de fondo del botón "Ver hotel" (default: #126AFF). Estos dos colores tienen que ser modificables en dos inputs dentro de la app.

## Requerimientos:

* Las únicas libreria que se puede agregar además de las que instala [CRA](https://create-react-app.dev/) son: 
  * [Material-UI](https://material-ui.com/)
  * Libreria de CSS in JS (ej: [Emotion JS](https://emotion.sh/docs/introduction), [Styled Components](https://styled-components.com/), etc.)
* Utilizar la [nueva API de Hooks de react](https://reactjs.org/docs/hooks-intro.html)
* Utilizar la [nueva api de Context de react](https://reactjs.org/docs/context.html)
* Utilizar FlexBox
* Utilizar Typescript

## Aclaraciones:

* Ignorar el resto de los campos que no esten dentro de `clusters` en el json de respuesta de la API
* Limite máximo de pantalla mobile: `425px`