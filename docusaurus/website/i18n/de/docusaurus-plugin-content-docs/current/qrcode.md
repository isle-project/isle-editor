---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-Code.

## Options

* __text__ | `string`: Text, der im QR-Code kodiert werden soll (standardmäßig wird die Lektions-URL verwendet, wenn nicht festgelegt). Default: `none`.
* __scale__ | `number`: Anzahl der Pixel pro Modul (schwarze Punkte). Default: `8`.
* __width__ | `number`: Breite in Pixeln; hat Vorrang vor der Eigenschaft `scale`.. Default: `none`.
* __showText__ | `boolean`: Boolescher Wert, der bestimmt, ob der im QR-Code kodierte Text angezeigt werden soll. Default: `false`.
* __center__ | `boolean`: boolescher Wert, der steuert, ob der QR-Code zentriert werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

