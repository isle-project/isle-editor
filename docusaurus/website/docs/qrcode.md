---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR Code.

## Options

* __text__ | `string`: text to encode in QR code (defaults to lesson URL if not set). Default: `none`.
* __scale__ | `number`: number of pixels per modules (black dots). Default: `8`.
* __width__ | `number`: width in pixels; takes precedence over `scale` property. Default: `none`.
* __showText__ | `boolean`: boolean determining whether to show the text encoded in the QR code. Default: `false`.
* __center__ | `boolean`: boolean controlling whether to center the QR code. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


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
