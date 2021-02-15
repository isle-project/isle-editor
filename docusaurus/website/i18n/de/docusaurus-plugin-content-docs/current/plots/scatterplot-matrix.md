---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Eine Streudiagramm-Matrix.

## Options

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __variables__ | `array (required)`: Array von Variablen zur Anzeige in der Matrix. Default: `none`.
* __color__ | `string`: kategorische Variable zur Abbildung auf die Farbe der Punkte. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

