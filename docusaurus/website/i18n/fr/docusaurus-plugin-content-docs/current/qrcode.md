---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Code QR.

## Options

* __text__ | `string`: texte à coder en code QR (par défaut, l'URL de la leçon si elle n'est pas définie). Default: `none`.
* __scale__ | `number`: nombre de pixels par module (points noirs). Default: `8`.
* __width__ | `number`: largeur en pixels ; a priorité sur la propriété "scale. Default: `none`.
* __showText__ | `boolean`: booléen déterminant s'il faut afficher le texte encodé dans le code QR. Default: `false`.
* __center__ | `boolean`: booléen contrôlant s'il faut centrer le code QR. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

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
