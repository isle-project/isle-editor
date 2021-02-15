---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

散点图矩阵。

## Options

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __variables__ | `array (required)`: 要在矩阵中显示的变量数组. Default: `none`.
* __color__ | `string`: 分类变量，以映射到点的颜色。. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

