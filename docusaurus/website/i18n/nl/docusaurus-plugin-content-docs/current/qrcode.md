---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-code.

## Options

* __text__ | `string`: tekst om te coderen in QR-code (standaardinstelling van de URL van de les indien niet ingesteld). Default: `none`.
* __scale__ | `number`: aantal pixels per module (zwarte punten). Default: `8`.
* __width__ | `number`: breedte in pixels; heeft voorrang op `schaal` eigenschap. Default: `none`.
* __height__ | `number`: hoogte in pixels; heeft voorrang op `schaal` eigenschap. Default: `none`.
* __showText__ | `boolean`: booleaanse bepaling of de tekst die in de QR-code is gecodeerd, moet worden weergegeven. Default: `false`.
* __center__ | `boolean`: booleaanse controle of de QR-code gecentreerd moet worden. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

