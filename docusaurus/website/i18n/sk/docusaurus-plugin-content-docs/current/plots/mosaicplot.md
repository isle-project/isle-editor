---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaikový pozemok.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt pre každú premennú. Default: `none`.
* __variables__ | `array (required)`: pole premenných na zobrazenie. Default: `none`.
* __showColors__ | `boolean`: kontroluje, či sa majú zobraziť farby zobrazujúce význam. Default: `false`.
* __axisLabels__ | `string`: umiestnenie štítkov osí (buď "rovnobežne s osou", "vodorovne", "kolmo na os" alebo "zvisle"). Default: `'parallel to the axis'`.


## Príklady

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
