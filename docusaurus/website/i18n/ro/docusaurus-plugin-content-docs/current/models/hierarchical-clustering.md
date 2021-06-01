---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Clusterizarea ierarhică.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variables__ | `array<string> (required)`: numele variabilelor utilizate pentru grupare. Default: `none`.
* __linkage__ | `string`: fie `complet`, fie `singur`.. Default: `'complete'`.
* __distance__ | `string`: distanța utilizată (`euclidian`, `chebyshev`, `cosine`, `hamming` sau `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback invocat cu obiectul model. Default: `onResult() {}`.


## Exemple

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

