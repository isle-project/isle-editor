---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Una trama de mosaicos.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __variables__ | `array (required)`: una serie de variables para mostrar. Default: `none`.
* __showColors__ | `boolean`: controla si se muestran los colores que muestran el significado. Default: `false`.
* __axisLabels__ | `string`: posicionamiento de las etiquetas de los ejes (ya sea, `paralelo al eje`, `horizontal`, `perpendicular al eje`, o `vertical`). Default: `'parallel to the axis'`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
