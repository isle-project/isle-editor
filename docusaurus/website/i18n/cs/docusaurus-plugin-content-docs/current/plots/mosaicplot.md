---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaiková plocha.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot pro každou proměnnou. Default: `none`.
* __variables__ | `array (required)`: pole proměnných, které se mají zobrazit. Default: `none`.
* __showColors__ | `boolean`: řídí, zda se mají zobrazovat barvy zobrazující význam. Default: `false`.
* __axisLabels__ | `string`: umístění popisků osy (buď "rovnoběžně s osou", "vodorovně", "kolmo k ose" nebo "svisle").. Default: `'parallel to the axis'`.


## Příklady

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
