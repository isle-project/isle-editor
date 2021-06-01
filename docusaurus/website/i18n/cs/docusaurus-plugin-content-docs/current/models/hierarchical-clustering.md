---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchické shlukování.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variables__ | `array<string> (required)`: názvy proměnných použitých pro shlukování. Default: `none`.
* __linkage__ | `string`: buď `kompletní`, nebo `jednotlivé`.. Default: `'complete'`.
* __distance__ | `string`: použitá vzdálenost (`euklidovská`, `čebyševská`, `kosinová`, `hammingova` nebo `manhattanská`). Default: `'euclidean'`.
* __onResult__ | `function`: zpětné volání vyvolané pomocí objektu modelu. Default: `onResult() {}`.


## Příklady

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

