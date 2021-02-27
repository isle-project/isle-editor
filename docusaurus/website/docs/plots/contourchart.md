---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

A contour chart.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __x__ | `string (required)`: x-axis variable. Default: `none`.
* __y__ | `string (required)`: y-axis variable. Default: `none`.
* __overlayPoints__ | `boolean`: controls whether to overlay points for each observation. Default: `false`.
* __smoothSpan__ | `number`: smoothing span. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array containing `linear` and/or `smooth` to overlay a linear and/or smoothed regression line. Default: `none`.
* __onSelected__ | `function`: callback invoked when points are selected with x, y values and the selected points. Default: `onSelected() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
