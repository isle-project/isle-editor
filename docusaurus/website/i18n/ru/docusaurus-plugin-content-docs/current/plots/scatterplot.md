---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Вычисляет минимальное и максимальное значение массива.

## Options

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __xval__ | `string (required)`: переменная для отображения по оси х. Default: `none`.
* __yval__ | `string (required)`: переменная для отображения на оси Y. Default: `none`.
* __text__ | `string`: тексты для отображения рядом с каждой точкой. Default: `none`.
* __color__ | `string`: категориальная переменная для сопоставления с цветом точек. Default: `none`.
* __type__ | `string`: категориальная переменная для сопоставления с отображаемыми символами. Default: `none`.
* __size__ | `string`: количественная переменная для сопоставления с размером точек. Default: `none`.
* __regressionLine__ | `boolean`: управляет тем, накладывать ли линию(ы) регрессии. Default: `false`.
* __regressionMethod__ | `array<string>`: `линейная` и/или `гладкая` для отображения линейной регрессии и сглаженной LOWESS линии регрессии. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: отобразить отдельную строку регрессии для каждой категории указанной категориальной переменной. Default: `none`.
* __smoothSpan__ | `number`: параметр диапазона сглаживания для `слабой` линии регрессии. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

