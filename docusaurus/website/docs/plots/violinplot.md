---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

A violin plot.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable to display. Default: `none`.
* __group__ | `string`: grouping variable. Default: `none`.
* __showBox__ | `boolean`: controls whether to display a box plot inside. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

