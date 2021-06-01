---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mosaiikplaneering.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array (required)`: kuvatavate muutujate massiivi. Default: `none`.
* __showColors__ | `boolean`: kontrollib, kas kuvada värve, mis näitavad tähtsust. Default: `false`.
* __axisLabels__ | `string`: telje siltide paigutus (kas "paralleelselt telje suhtes", "horisontaalselt", "risti telje suhtes" või "vertikaalselt").. Default: `'parallel to the axis'`.


## Näited

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
