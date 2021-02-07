---
id: image
title: Image
sidebar_label: Image
---

Componente para mostrar una imagen.

## Options

* __src__ | `string (required)`: ubicación de la fuente de la imagen. Default: `none`.
* __alt__ | `string`: descripción de la imagen. Default: `''`.
* __body__ | `string`: Datos codificados de imagen en base64. Default: `none`.
* __height__ | `(number|string)`: altura de la imagen (en px). Default: `none`.
* __width__ | `(number|string)`: ancho de la imagen (en px). Default: `none`.
* __inline__ | `boolean`: permite rodear la imagen con texto. Default: `false`.
* __id__ | `string`: identificador de componentes. Default: `none`.
* __showModal__ | `boolean`: controla si se muestra la vista modal a pantalla completa. Default: `true`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onShare__ | `function`: llamada de retorno invocada con la imagen si se hace clic en el botón "compartir".. Default: `none`.


## Examples

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    className="center"
    width="50%"
    height="auto"
/>
```

