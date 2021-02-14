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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Visible Link', value: 'visibleLink' },
        { label: 'Scale', value: 'scale' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<QRCode />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<QRCode 
    center 
    text="https://isledocs.com/docs/qrcode" 
    style ={{ outline: '4px grey solid' }}
/>
```

</TabItem>

<TabItem value="visibleLink">

```jsx live
<QRCode 
    text="https://isledocs.com/docs/qrcode"
    showText
/>
```

</TabItem>

<TabItem value="scale">

```jsx live
<QRCode 
    text="https://isledocs.com/docs/qrcode"
    scale={12}
    showText
    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}
/>
```

</TabItem>

</Tabs>
