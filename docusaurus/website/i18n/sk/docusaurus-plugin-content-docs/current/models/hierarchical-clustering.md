---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchické zhlukovanie.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variables__ | `array<string> (required)`: názvy premenných použitých na zhlukovanie. Default: `none`.
* __linkage__ | `string`: buď `kompletný` alebo `jediný`. Default: `'complete'`.
* __distance__ | `string`: použitá vzdialenosť (`euklidovská`, `čebyševská`, `kosínová`, `hammingova` alebo `manhattanská`). Default: `'euclidean'`.
* __onResult__ | `function`: spätné volanie vyvolané pomocou objektu modelu. Default: `onResult() {}`.


## Príklady

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

