---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Código QR.

## Opciones

* __text__ | `string`: texto a codificar en el código QR (por defecto a la URL de la lección si no se establece). Default: `none`.
* __scale__ | `number`: número de píxeles por módulos (puntos negros). Default: `8`.
* __width__ | `number`: ancho en píxeles; tiene prioridad sobre la propiedad de "escala". Default: `none`.
* __showText__ | `boolean`: booleana determinando si mostrar el texto codificado en el código QR. Default: `false`.
* __center__ | `boolean`: booleano controlando si centrar el código QR. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

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
