---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Вычисляет минимальное и максимальное значение массива.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __xval__ | `string (required)`: переменная для отображения по оси х. Default: `none`.
* __yval__ | `string (required)`: переменная для отображения на оси Y. Default: `none`.
* __text__ | `(string|Factor)`: тексты для отображения рядом с каждой точкой. Default: `none`.
* __color__ | `(string|Factor)`: категориальная переменная для сопоставления с цветом точек. Default: `none`.
* __type__ | `(string|Factor)`: категориальная переменная для сопоставления с отображаемыми символами. Default: `none`.
* __size__ | `string`: количественная переменная для сопоставления с размером точек. Default: `none`.
* __regressionLine__ | `boolean`: управляет тем, накладывать ли линию(ы) регрессии. Default: `false`.
* __regressionMethod__ | `array<string>`: `линейная` и/или `гладкая` для отображения линейной регрессии и сглаженной LOWESS линии регрессии. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: отобразить отдельную строку регрессии для каждой категории указанной категориальной переменной. Default: `none`.
* __smoothSpan__ | `number`: параметр диапазона сглаживания для `слабой` линии регрессии. Default: `0.66`.
* __jitterX__ | `boolean`: управляет тем, следует ли дробить точки на оси x. Default: `false`.
* __jitterY__ | `boolean`: контролирует, следует ли дробить точки на оси y. Default: `false`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
