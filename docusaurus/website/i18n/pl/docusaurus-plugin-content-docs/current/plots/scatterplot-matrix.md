---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Matryca rozproszona.

## Opcje

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __variables__ | `array (required)`: tablica zmiennych do wyświetlania w macierzy. Default: `none`.
* __color__ | `string`: zmienna kategoryczna do mapy do koloru punktów. Default: `none`.


## Przykłady

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

