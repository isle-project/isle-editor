---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-kood.

## Valikud

* __text__ | `string`: QR-koodis kodeeritav tekst (kui seda ei ole määratud, on vaikimisi õppetöö URL). Default: `none`.
* __scale__ | `number`: pikslite arv moodulite kohta (mustad punktid). Default: `8`.
* __width__ | `number`: laius pikslites; omadus "scale" on ülimuslik.. Default: `none`.
* __showText__ | `boolean`: boolean, mis määrab, kas QR-koodis kodeeritud teksti näidatakse.. Default: `false`.
* __center__ | `boolean`: boolean, mis kontrollib, kas QR-kood tsentreeritakse.. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
