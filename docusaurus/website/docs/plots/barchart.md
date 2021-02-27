---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Bar chart.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: name of statistic to compute for `yvar` and to be displayed as bar height for each category. Default: `none`.
* __horizontal__ | `boolean`: whether to display bars horizontally. Default: `false`.
* __stackBars__ | `boolean`: when grouping, controls whether to stack bars on top of each other. Default: `false`.
* __relative__ | `boolean`: whether to calculate relative frequencies inside each group. Default: `false`.
* __totalPercent__ | `boolean`: whether to display overall bars as relative frequencies. Default: `false`.
* __xOrder__ | `string`: either `total`, `category`, `min`, `max`, `mean`, or `median`. Default: `none`.
* __direction__ | `string`: how to order bars alongside x-axis (`ascending` or `descending`). Default: `'ascending'`.


## Examples

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

