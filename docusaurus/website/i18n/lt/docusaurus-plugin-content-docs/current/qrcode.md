---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR kodas.

## Parinktys

* __text__ | `string`: tekstas, kurį reikia užkoduoti QR kode (jei nenustatyta, numatytasis nustatymas yra pamokos URL).. Default: `none`.
* __scale__ | `number`: pikselių skaičius moduliuose (juodi taškai). Default: `8`.
* __width__ | `number`: plotis pikseliais; turi pirmenybę prieš `scale` savybę. Default: `none`.
* __showText__ | `boolean`: loginis rodiklis, nustatantis, ar rodyti QR kode užkoduotą tekstą.. Default: `false`.
* __center__ | `boolean`: loginis rodiklis, rodantis, ar QR kodą centruoti.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
