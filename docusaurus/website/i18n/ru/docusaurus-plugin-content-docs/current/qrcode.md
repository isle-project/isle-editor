---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

QR-код.

## Options

* __text__ | `string`: текст для кодирования в QR-коде (по умолчанию URL урока, если он не установлен). Default: `none`.
* __scale__ | `number`: количество пикселей на модуль (черные точки). Default: `8`.
* __width__ | `number`: ширина в пикселях; имеет приоритет над свойством `шкала`.. Default: `none`.
* __showText__ | `boolean`: логическое определение того, показывать ли текст, закодированный в QR-коде. Default: `false`.
* __center__ | `boolean`: логический контроль по центру QR-кода. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


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
