---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Codice QR.

## Opzioni

* __text__ | `string`: testo da codificare in codice QR (default per l'URL della lezione se non impostato). Default: `none`.
* __scale__ | `number`: numero di pixel per modulo (punti neri). Default: `8`.
* __width__ | `number`: larghezza in pixel; ha la precedenza sulla proprietà "scala. Default: `none`.
* __showText__ | `boolean`: booleano che determina se mostrare il testo codificato nel codice QR. Default: `false`.
* __center__ | `boolean`: booleano che controlla se centrare il codice QR. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

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
