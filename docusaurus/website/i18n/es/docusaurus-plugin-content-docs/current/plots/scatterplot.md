---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Calcula el valor mínimo y máximo de un conjunto.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __xval__ | `string (required)`: variable para mostrar en el eje x. Default: `none`.
* __yval__ | `string (required)`: variable para mostrar en el eje y. Default: `none`.
* __text__ | `(string|Factor)`: textos que se mostrarán junto a cada punto. Default: `none`.
* __color__ | `(string|Factor)`: variable categórica para mapear al color de los puntos. Default: `none`.
* __type__ | `(string|Factor)`: variable categórica para asignar a los símbolos mostrados. Default: `none`.
* __size__ | `string`: variable cuantitativa para mapear el tamaño de los puntos. Default: `none`.
* __regressionLine__ | `boolean`: controla si se superponen línea(s) de regresión. Default: `false`.
* __regressionMethod__ | `array<string>`: "lineal" y/o "suave" para mostrar la regresión lineal y la línea de regresión suave LOWESS. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: mostrar una línea de regresión separada para cada categoría de variable categórica especificada. Default: `none`.
* __smoothSpan__ | `number`: parámetro de suavizado de la línea de regresión "suave". Default: `0.66`.
* __jitterX__ | `boolean`: controla si los puntos en el eje x se desplazan o no. Default: `false`.
* __jitterY__ | `boolean`: controla si los puntos en el eje Y se desplazan o no. Default: `false`.


## Ejemplos

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
