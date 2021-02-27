---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

A pie chart component that by default displays the counts of all categories from a chosen variable.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __summaryVariable__ | `string`: optional variable whose sum to display for each `variable` category. Default: `none`.


## Examples

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

