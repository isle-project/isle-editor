---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Grafico a barre.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `string`: variabile di raggruppamento. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: nome della statistica da calcolare per `yvar` e da visualizzare come altezza della barra per ogni categoria. Default: `none`.
* __horizontal__ | `boolean`: se visualizzare le barre in orizzontale. Default: `false`.
* __stackBars__ | `boolean`: quando si raggruppano, controlla se impilare le barre una sopra l'altra. Default: `false`.
* __relative__ | `boolean`: se calcolare le frequenze relative all'interno di ciascun gruppo. Default: `false`.
* __totalPercent__ | `boolean`: se visualizzare le barre complessive come frequenze relative. Default: `false`.
* __xOrder__ | `string`: sia `totale`, `categoria`, `min`, `max`, `mean`, o `mediana`.. Default: `none`.
* __direction__ | `string`: come ordinare le barre accanto all'asse delle x (in "ascesa" o in "discesa"). Default: `'ascending'`.


## Examples

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

