---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

A mosaic plot.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __variables__ | `array (required)`: array of variables to display. Default: `none`.
* __showColors__ | `boolean`: controls whether to display colors showing significance. Default: `false`.
* __axisLabels__ | `string`: positioning of axis labels (either, `parallel to the axis`, `horizontal`, `perpendicular to the axis`, or `vertical`). Default: `'parallel to the axis'`.

## Examples

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
