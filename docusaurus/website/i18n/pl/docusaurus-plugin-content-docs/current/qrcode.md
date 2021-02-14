---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Kod QR.

## Options

* __text__ | `string`: tekst do zakodowania w kodzie QR (domyślnie na URL lekcji, jeśli nie jest ustawiony). Default: `none`.
* __scale__ | `number`: liczba pikseli na moduł (czarne kropki). Default: `8`.
* __width__ | `number`: szerokość w pikselach; ma pierwszeństwo przed właściwością `skala`. Default: `none`.
* __showText__ | `boolean`: boolean określające, czy tekst zakodowany w kodzie QR ma być wyświetlany. Default: `false`.
* __center__ | `boolean`: boolean kontrolowanie czy wyśrodkować kod QR. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

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
