---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR kód.

## Možnosti

* __text__ | `string`: text, který se má zakódovat do QR kódu (pokud není nastaven, je výchozí hodnotou URL lekce).. Default: `none`.
* __scale__ | `number`: počet pixelů na modul (černé body). Default: `8`.
* __width__ | `number`: šířka v pixelech; má přednost před vlastností `scale`.. Default: `none`.
* __showText__ | `boolean`: boolean určující, zda se má zobrazit text zakódovaný v QR kódu.. Default: `false`.
* __center__ | `boolean`: boolean určující, zda se má QR kód vycentrovat.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
