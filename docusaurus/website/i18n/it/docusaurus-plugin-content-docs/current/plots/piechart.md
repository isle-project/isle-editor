---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Un componente del grafico a torta che per default visualizza i conteggi di tutte le categorie di una variabile scelta.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `string`: variabile di raggruppamento. Default: `none`.
* __summaryVariable__ | `string`: variabile opzionale la cui somma da visualizzare per ogni categoria di `variabile. Default: `none`.


## Esempi

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

