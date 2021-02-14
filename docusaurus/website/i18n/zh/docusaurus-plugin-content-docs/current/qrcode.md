---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

二维码。

## Options

* __text__ | `string`: 要在QR码中编码的文本（未设置时默认为课程URL. Default: `none`.
* __scale__ | `number`: 每个模块的像素数(黑点). Default: `8`.
* __width__ | `number`: 宽度，单位为像素；优先于`scale`属性。. Default: `none`.
* __showText__ | `boolean`: 决定是否显示QR码中编码的文字的布尔值。. Default: `false`.
* __center__ | `boolean`: 控制是否将QR码居中的布尔值。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

