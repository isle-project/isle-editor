---
id: histogram
title: Histogram
sidebar_label: Histogram
---

A histogram.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable to display. Default: `none`.
* __group__ | `string`: grouping variable. Default: `none`.
* __groupMode__ | `string`: whether to overlay grouped histograms on top of each other (`Overlay`) or in separate plots next to each other (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controls whether to display density values instead of counts on the y-axis. Default: `false`.
* __densityType__ | `string`: when displaying densities, one can either overlay a parametric distribution (`Normal`, `Uniform`, or `Exponential`) or a non-parametric kernel density estimate (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: binning strategy (`Automatic`, `Select # of bins`, or `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: custom number of bins. Default: `none`.
* __nCols__ | `number`: number of columns when displaying a facetted grouped histogram. Default: `none`.
* __xBins__ | `{start,size,end}`: object with `start`, `size`, and `end` properties governing binning behavior. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

