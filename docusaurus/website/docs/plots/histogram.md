---
id: histogram
title: Histogram
sidebar_label: Histogram
---

A histogram.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __title__ | `string`: title of histogram. Default: `none`.
* __groupMode__ | `string`: whether to overlay grouped histograms on top of each other (`Overlay`) or in separate plots next to each other (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controls whether to display density values instead of counts on the y-axis. Default: `false`.
* __densityType__ | `string`: when displaying densities, one can either overlay a parametric distribution (`Normal`, `Uniform`, or `Exponential`) or a non-parametric kernel density estimate (`Data-driven`). Default: `none`.
* __densityParams__ | `array<number>`: distribution parameters for the density when a parametric distribution is used ([mu, sigma] for a normal distribution, [a, b] for a uniform distribution, [lambda] for an exponential distribution). Default: `[]`.
* __bandwidthAdjust__ | `number`: manual adjustment of bandwidth of kernel density (applicable only when `densityType` is set to `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: binning strategy (`Automatic`, `Select # of bins`, or `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: custom number of bins. Default: `none`.
* __nCols__ | `number`: number of columns when displaying a facetted grouped histogram. Default: `none`.
* __xBins__ | `{start,size,end}`: object with `start`, `size`, and `end` properties governing binning behavior. Default: `{}`.
* __sameXRange__ | `boolean`: if true, the x-axis range for each facet will be the same as the overall histogram. Default: `false`.
* __sameYRange__ | `boolean`: if true, the y-axis range for each facet will be the same as the overall histogram. Default: `false`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
