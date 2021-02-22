---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Código QR.

## Opções

* __text__ | `string`: texto a ser codificado em código QR (padrão para a URL da lição se não estiver definido). Default: `none`.
* __scale__ | `number`: número de pixels por módulo (pontos pretos). Default: `8`.
* __width__ | `number`: largura em pixels; tem precedência sobre a propriedade "escala. Default: `none`.
* __showText__ | `boolean`: booleano determinando se deve mostrar o texto codificado no código QR. Default: `false`.
* __center__ | `boolean`: booleano controlando se deve centralizar o código QR. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

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
