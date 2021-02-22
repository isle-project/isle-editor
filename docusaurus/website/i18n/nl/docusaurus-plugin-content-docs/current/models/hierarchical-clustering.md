---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hiërarchische clustering.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variables__ | `array<string> (required)`: namen van variabelen die worden gebruikt voor het clusteren. Default: `none`.
* __linkage__ | `string`: ofwel `compleet` of `single`. Default: `'complete'`.
* __distance__ | `string`: gebruikte afstand (`euclidean`, `chebyshev`, `cosine`, `hamming`, of `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback ingeroepen met modelobject. Default: `onResult() {}`.


## Voorbeelden

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

