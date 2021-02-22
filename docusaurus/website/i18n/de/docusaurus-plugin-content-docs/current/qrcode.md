---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-Code.

## Optionen

* __text__ | `string`: Text, der im QR-Code kodiert werden soll (standardmäßig wird die Lektions-URL verwendet, wenn nicht festgelegt). Default: `none`.
* __scale__ | `number`: Anzahl der Pixel pro Modul (schwarze Punkte). Default: `8`.
* __width__ | `number`: Breite in Pixeln; hat Vorrang vor der Eigenschaft `scale`.. Default: `none`.
* __showText__ | `boolean`: Boolescher Wert, der bestimmt, ob der im QR-Code kodierte Text angezeigt werden soll. Default: `false`.
* __center__ | `boolean`: boolescher Wert, der steuert, ob der QR-Code zentriert werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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
