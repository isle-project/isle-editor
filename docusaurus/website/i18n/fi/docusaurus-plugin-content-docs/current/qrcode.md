---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-koodi.

## Vaihtoehdot

* __text__ | `string`: QR-koodiin koodattava teksti (oletusarvo on oppitunnin URL-osoite, jos sitä ei ole asetettu).. Default: `none`.
* __scale__ | `number`: pikseleiden määrä moduuleittain (mustat pisteet). Default: `8`.
* __width__ | `number`: leveys pikseleinä; on ensisijainen ominaisuus `scale`-ominaisuuteen nähden.. Default: `none`.
* __showText__ | `boolean`: boolean, jolla määritetään, näytetäänkö QR-koodiin koodattu teksti.. Default: `false`.
* __center__ | `boolean`: boolean, joka ohjaa, keskitetäänkö QR-koodi keskelle.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
