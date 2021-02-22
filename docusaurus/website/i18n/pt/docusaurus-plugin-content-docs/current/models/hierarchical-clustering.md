---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Agrupamento Hierárquico.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nomes de variáveis utilizadas para agrupamento. Default: `none`.
* __linkage__ | `string`: seja "completo" ou "único".. Default: `'complete'`.
* __distance__ | `string`: distância utilizada (`euclidiano`, `chebyshev`, `cosine`, `hamming`, ou `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: chamada de retorno invocada com o objeto modelo. Default: `onResult() {}`.


## Exemplos

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

