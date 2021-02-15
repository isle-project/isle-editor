---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Una matrice a dispersione.

## Options

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __variables__ | `array (required)`: array di variabili da visualizzare nella matrice. Default: `none`.
* __color__ | `string`: variabile categoriale da mappare a colore dei punti. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

