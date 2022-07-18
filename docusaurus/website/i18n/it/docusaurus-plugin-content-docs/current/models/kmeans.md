---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K- significa raggruppamento.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variables__ | `array<string> (required)`: nomi delle variabili utilizzate per il clustering. Default: `none`.
* __K__ | `number`: numero di cluster. Default: `3`.
* __elbowPlot__ | `boolean`: booleano che indica se includere il grafico del gomito. Default: `false`.
* __initialization__ | `string`: metodo di inizializzazione (`kmeans++`, `random`, o `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: richiamo richiamato con oggetto modello. Default: `onResult() {}`.


## Esempi

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

