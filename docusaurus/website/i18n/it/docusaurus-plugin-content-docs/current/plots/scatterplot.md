---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Calcola il valore minimo e massimo di una matrice.

## Options

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __xval__ | `string (required)`: variabile da visualizzare sull'asse x. Default: `none`.
* __yval__ | `string (required)`: variabile da visualizzare sull'asse y. Default: `none`.
* __text__ | `string`: testi da visualizzare accanto ad ogni punto. Default: `none`.
* __color__ | `string`: variabile categoriale da mappare a colore dei punti. Default: `none`.
* __type__ | `string`: variabile categoriale per mappare i simboli visualizzati. Default: `none`.
* __size__ | `string`: variabile quantitativa da mappare alla dimensione dei punti. Default: `none`.
* __regressionLine__ | `boolean`: controlla se sovrapporre la linea o le linee di regressione. Default: `false`.
* __regressionMethod__ | `array<string>`: "lineare" e/o "liscio" per visualizzare la regressione lineare e la linea di regressione LOWESS levigata. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: visualizzare la linea di regressione separata per ogni categoria di variabile categoriale specificata. Default: `none`.
* __smoothSpan__ | `number`: parametro dello span di lisciatura per la linea di regressione "liscio".. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

