---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Código QR.

## Options

* __text__ | `string`: texto a codificar en el código QR (por defecto a la URL de la lección si no se establece). Default: `none`.
* __scale__ | `number`: número de píxeles por módulos (puntos negros). Default: `8`.
* __width__ | `number`: ancho en píxeles; tiene prioridad sobre la propiedad de "escala".. Default: `none`.
* __height__ | `number`: altura en píxeles; tiene prioridad sobre la propiedad de "escala".. Default: `none`.
* __showText__ | `boolean`: booleana determinando si mostrar el texto codificado en el código QR. Default: `false`.
* __center__ | `boolean`: booleano controlando si centrar el código QR. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

