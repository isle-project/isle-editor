---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Kod QR.

## Options

* __text__ | `string`: tekst do zakodowania w kodzie QR (domyślnie na URL lekcji, jeśli nie jest ustawiony). Default: `none`.
* __scale__ | `number`: liczba pikseli na moduł (czarne kropki). Default: `8`.
* __width__ | `number`: szerokość w pikselach; ma pierwszeństwo przed właściwością `skala`. Default: `none`.
* __showText__ | `boolean`: boolean określające, czy tekst zakodowany w kodzie QR ma być wyświetlany. Default: `false`.
* __center__ | `boolean`: boolean kontrolowanie czy wyśrodkować kod QR. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

