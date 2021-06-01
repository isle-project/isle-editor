---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-kode.

## Indstillinger

* __text__ | `string`: tekst, der skal indkodes i QR-koden (standard er lesson URL, hvis den ikke er angivet). Default: `none`.
* __scale__ | `number`: antal pixels pr. modul (sorte prikker). Default: `8`.
* __width__ | `number`: bredde i pixel; har forrang for egenskaben `scale`.. Default: `none`.
* __showText__ | `boolean`: boolean, der bestemmer, om den tekst, der er kodet i QR-koden, skal vises. Default: `false`.
* __center__ | `boolean`: boolean, der kontrollerer, om QR-koden skal centreres. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
