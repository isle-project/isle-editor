---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-kod.

## Alternativ

* __text__ | `string`: text som ska kodas i QR-koden (standard är lektions-URL om den inte är inställd). Default: `none`.
* __scale__ | `number`: antal pixlar per modul (svarta punkter). Default: `8`.
* __width__ | `number`: bredd i pixlar; har företräde framför egenskapen `scale`.. Default: `none`.
* __showText__ | `boolean`: Boolska som bestämmer om den kodade texten i QR-koden ska visas.. Default: `false`.
* __center__ | `boolean`: Boolean som styr om QR-koden ska centreras.. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
