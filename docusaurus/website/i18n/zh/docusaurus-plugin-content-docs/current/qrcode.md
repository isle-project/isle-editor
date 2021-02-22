---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

二维码。

## 选项

* __text__ | `string`: 要在QR码中编码的文本（未设置时默认为课程URL. Default: `none`.
* __scale__ | `number`: 每个模块的像素数(黑点). Default: `8`.
* __width__ | `number`: 宽度，单位为像素；优先于`scale`属性。. Default: `none`.
* __showText__ | `boolean`: 决定是否显示QR码中编码的文字的布尔值。. Default: `false`.
* __center__ | `boolean`: 控制是否将QR码居中的布尔值。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

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
