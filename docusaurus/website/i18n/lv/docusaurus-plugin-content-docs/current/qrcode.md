---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR kods.

## Iespējas

* __text__ | `string`: QR kodā kodējamais teksts (ja nav iestatīts, noklusējuma iestatījums ir nodarbības URL).. Default: `none`.
* __scale__ | `number`: pikseļu skaits moduļos (melni punkti). Default: `8`.
* __width__ | `number`: platums pikseļos; ir noteicošais parametrs pār `scale` īpašību.. Default: `none`.
* __showText__ | `boolean`: boolean, kas nosaka, vai parādīt QR kodā iekodēto tekstu.. Default: `false`.
* __center__ | `boolean`: boolean, kas nosaka, vai QR kodu centrēt.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
