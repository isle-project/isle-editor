---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Κωδικός QR.

## Επιλογές

* __text__ | `string`: κείμενο για κωδικοποίηση σε κώδικα QR (προεπιλογή σε URL μαθήματος αν δεν έχει οριστεί). Default: `none`.
* __scale__ | `number`: αριθμός εικονοστοιχείων ανά ενότητα (μαύρες κουκκίδες). Default: `8`.
* __width__ | `number`: πλάτος σε pixels; υπερισχύει της ιδιότητας `scale`. Default: `none`.
* __showText__ | `boolean`: boolean που καθορίζει αν θα εμφανιστεί το κείμενο που είναι κωδικοποιημένο στον κωδικό QR. Default: `false`.
* __center__ | `boolean`: boolean που ελέγχει αν ο κωδικός QR θα κεντραριστεί. Default: `false`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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
