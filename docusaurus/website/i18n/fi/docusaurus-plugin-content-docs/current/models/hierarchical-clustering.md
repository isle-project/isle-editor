---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarkkinen klusterointi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variables__ | `array<string> (required)`: klusteroinnissa käytettävien muuttujien nimet. Default: `none`.
* __linkage__ | `string`: joko "täydellinen" tai "yksittäinen".. Default: `'complete'`.
* __distance__ | `string`: käytetty etäisyys (`euklidinen`, `chebyshev`, `cosine`, `hamming` tai `manhattan`).. Default: `'euclidean'`.
* __onResult__ | `function`: callback kutsutaan malliobjektilla. Default: `onResult() {}`.


## Esimerkkejä

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

