---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarhiline klasterdamine.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array<string> (required)`: klasterdamiseks kasutatavate muutujate nimed. Default: `none`.
* __linkage__ | `string`: kas "täielik" või "üksik".. Default: `'complete'`.
* __distance__ | `string`: kasutatud kaugus (eukleidiline, Tšebõšev, koosiin, hamming või Manhattan).. Default: `'euclidean'`.
* __onResult__ | `function`: callback kutsutakse üles koos mudeli objektiga. Default: `onResult() {}`.


## Näited

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

