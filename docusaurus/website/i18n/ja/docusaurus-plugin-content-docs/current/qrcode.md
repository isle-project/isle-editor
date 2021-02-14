---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QRコードです。

## Options

* __text__ | `string`: QRコードでエンコードするテキスト (設定されていない場合のデフォルトはレッスンURL). Default: `none`.
* __scale__ | `number`: モジュールあたりの画素数（黒点. Default: `8`.
* __width__ | `number`: ピクセル単位の幅。. Default: `none`.
* __showText__ | `boolean`: QRコードでエンコードされたテキストを表示するかどうかを決定するブール値. Default: `false`.
* __center__ | `boolean`: QRコードを中央に配置するかどうかを制御するブール値. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

```jsx live
<QRCode />
```

