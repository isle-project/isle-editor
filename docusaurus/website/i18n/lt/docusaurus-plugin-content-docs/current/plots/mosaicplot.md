---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaikinis sklypas.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __variables__ | `array (required)`: rodomų kintamųjų masyvas. Default: `none`.
* __showColors__ | `boolean`: kontroliuoja, ar rodyti spalvas, rodančias reikšmingumą.. Default: `false`.
* __axisLabels__ | `string`: ašių etikečių išdėstymas (lygiagrečiai ašiai, horizontaliai, statmenai ašiai arba vertikaliai).. Default: `'parallel to the axis'`.


## Pavyzdžiai

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
