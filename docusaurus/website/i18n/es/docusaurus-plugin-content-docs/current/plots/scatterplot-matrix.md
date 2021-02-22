---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Una matriz de trama de dispersión.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __variables__ | `array (required)`: una serie de variables para mostrar en la matriz. Default: `none`.
* __color__ | `string`: variable categórica para mapear al color de los puntos. Default: `none`.


## Ejemplos

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

