---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

A heat map for visualizing a relationship between two variables.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __x__ | `string (required)`: x-axis variable. Default: `none`.
* __y__ | `string (required)`: y-axis variable. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __overlayPoints__ | `boolean`: controls whether to overlay points for each observation. Default: `false`.
* __smoothSpan__ | `number`: smoothing span. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array containing `linear` and/or `smooth` to overlay a linear and/or smoothed regression line. Default: `none`.
* __alternateColor__ | `boolean`: controls whether to use an alternative color scheme for the heat map. Default: `false`.
* __commonXAxis__ | `boolean`: controls whether to use a common x-axis when creating multiple heat maps per value of a grouping variable. Default: `false`.
* __commonYAxis__ | `boolean`: controls whether to use a common y-axis when creating multiple heat maps per value of a grouping variable. Default: `false`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
