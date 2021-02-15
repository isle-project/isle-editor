---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Матрица графика рассеяния.

## Options

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __variables__ | `array (required)`: массив переменных для отображения в матрице. Default: `none`.
* __color__ | `string`: категориальная переменная для сопоставления с цветом точек. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

