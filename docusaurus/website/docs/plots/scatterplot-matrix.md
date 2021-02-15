---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

A scatter plot matrix.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __variables__ | `array (required)`: array of variables to display in matrix. Default: `none`.
* __color__ | `string`: categorical variable to map to color of points. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

