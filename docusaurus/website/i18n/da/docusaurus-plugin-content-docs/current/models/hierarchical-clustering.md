---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarkisk gruppering.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variables__ | `array<string> (required)`: navne på variabler, der anvendes til klyngeopdeling. Default: `none`.
* __linkage__ | `string`: enten `complete` eller `single`. Default: `'complete'`.
* __distance__ | `string`: anvendt afstand (`euklidisk`, `chebyshev`, `cosine`, `hamming` eller `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback påkaldt med modelobjekt. Default: `onResult() {}`.


## Eksempler

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

