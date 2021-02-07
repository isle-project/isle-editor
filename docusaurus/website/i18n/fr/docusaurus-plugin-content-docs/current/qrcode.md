---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Code QR.

## Options

* __text__ | `string`: texte à coder en code QR (par défaut, l'URL de la leçon si elle n'est pas définie). Default: `none`.
* __scale__ | `number`: nombre de pixels par module (points noirs). Default: `8`.
* __width__ | `number`: largeur en pixels ; a priorité sur la propriété "scale. Default: `none`.
* __height__ | `number`: hauteur en pixels ; a priorité sur la propriété "scale. Default: `none`.
* __showText__ | `boolean`: booléen déterminant s'il faut afficher le texte encodé dans le code QR. Default: `false`.
* __center__ | `boolean`: booléen contrôlant s'il faut centrer le code QR. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

