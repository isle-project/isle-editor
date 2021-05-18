---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Clustering gerarchico.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variables__ | `array<string> (required)`: nomi delle variabili utilizzate per il clustering. Default: `none`.
* __linkage__ | `string`: sia `completo` che `singolo`. Default: `'complete'`.
* __distance__ | `string`: distanza usata (`euclidea`, `chebyshev`, `cosine`, `hamming`, o `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: richiamo richiamato con oggetto modello. Default: `onResult() {}`.


## Esempi

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

