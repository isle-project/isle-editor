---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR Code.

## Examples

```jsx live
<QRCode />
```

## Options

* __text__ | `string`: text to encode in QR code (defaults to lesson URL if not set). Default: `none`.
* __scale__ | `number`: number of pixels per modules (black dots). Default: `8`.
* __width__ | `number`: width in pixels; takes precedence over `scale` property. Default: `none`.
* __height__ | `number`: height in pixels; takes precedence over `scale` property. Default: `none`.
* __showText__ | `boolean`: boolean determining whether to show the text encoded in the QR code. Default: `false`.
* __center__ | `boolean`: boolean controlling whether to center the QR code. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
