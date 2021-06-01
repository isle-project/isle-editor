---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Kód QR.

## Možnosti

* __text__ | `string`: text, ktorý sa má zakódovať v QR kóde (ak nie je nastavený, predvolene sa nastaví na adresu URL lekcie). Default: `none`.
* __scale__ | `number`: počet pixelov na modul (čierne body). Default: `8`.
* __width__ | `number`: šírka v pixeloch; má prednosť pred vlastnosťou `scale`. Default: `none`.
* __showText__ | `boolean`: boolean určujúci, či sa má zobraziť text zakódovaný v QR kóde. Default: `false`.
* __center__ | `boolean`: boolean kontrolujúci, či sa má QR kód vycentrovať. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
