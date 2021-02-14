---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Código QR.

## Options

* __text__ | `string`: texto a ser codificado em código QR (padrão para a URL da lição se não estiver definido). Default: `none`.
* __scale__ | `number`: número de pixels por módulo (pontos pretos). Default: `8`.
* __width__ | `number`: largura em pixels; tem precedência sobre a propriedade "escala. Default: `none`.
* __showText__ | `boolean`: booleano determinando se deve mostrar o texto codificado no código QR. Default: `false`.
* __center__ | `boolean`: booleano controlando se deve centralizar o código QR. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

