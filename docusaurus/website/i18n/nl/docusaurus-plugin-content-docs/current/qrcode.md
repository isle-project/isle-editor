---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-code.

## Opties

* __text__ | `string`: tekst om te coderen in QR-code (standaardinstelling van de URL van de les indien niet ingesteld). Default: `none`.
* __scale__ | `number`: aantal pixels per module (zwarte punten). Default: `8`.
* __width__ | `number`: breedte in pixels; heeft voorrang op `schaal` eigenschap. Default: `none`.
* __showText__ | `boolean`: booleaanse bepaling of de tekst die in de QR-code is gecodeerd, moet worden weergegeven. Default: `false`.
* __center__ | `boolean`: booleaanse controle of de QR-code gecentreerd moet worden. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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
