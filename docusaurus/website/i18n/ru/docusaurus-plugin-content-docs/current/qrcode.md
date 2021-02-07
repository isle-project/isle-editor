---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-код.

## Options

* __text__ | `string`: текст для кодирования в QR-коде (по умолчанию URL урока, если он не установлен). Default: `none`.
* __scale__ | `number`: количество пикселей на модуль (черные точки). Default: `8`.
* __width__ | `number`: ширина в пикселях; имеет приоритет над свойством `шкала`.. Default: `none`.
* __height__ | `number`: высота в пикселях; имеет приоритет над свойством `масштаб`. Default: `none`.
* __showText__ | `boolean`: логическое определение того, показывать ли текст, закодированный в QR-коде. Default: `false`.
* __center__ | `boolean`: логический контроль по центру QR-кода. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

