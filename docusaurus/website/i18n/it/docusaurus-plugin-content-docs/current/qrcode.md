---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Codice QR.

## Options

* __text__ | `string`: testo da codificare in codice QR (default per l'URL della lezione se non impostato). Default: `none`.
* __scale__ | `number`: numero di pixel per modulo (punti neri). Default: `8`.
* __width__ | `number`: larghezza in pixel; ha la precedenza sulla proprietà "scala. Default: `none`.
* __height__ | `number`: altezza in pixel; ha la precedenza sulla proprietà "scala. Default: `none`.
* __showText__ | `boolean`: booleano che determina se mostrare il testo codificato nel codice QR. Default: `false`.
* __center__ | `boolean`: booleano che controlla se centrare il codice QR. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

