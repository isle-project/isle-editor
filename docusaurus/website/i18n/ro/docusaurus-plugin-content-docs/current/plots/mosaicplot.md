---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Un complot mozaic.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __variables__ | `array (required)`: matrice de variabile de afișat. Default: `none`.
* __showColors__ | `boolean`: controlează dacă se afișează culorile care arată semnificația. Default: `false`.
* __axisLabels__ | `string`: poziționarea etichetelor axei (fie `paralel cu axa`, `orizontal`, `perpendicular cu axa`, sau `vertical`). Default: `'parallel to the axis'`.


## Exemple

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
