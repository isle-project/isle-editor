---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarkisk klustring.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variables__ | `array<string> (required)`: Namn på variabler som används för klusterbildning.. Default: `none`.
* __linkage__ | `string`: antingen "komplett" eller "enskilt".. Default: `'complete'`.
* __distance__ | `string`: använt avstånd (eukleidisk, Chebyshev, Cosine, Hamming eller Manhattan).. Default: `'euclidean'`.
* __onResult__ | `function`: callback som anropas med modellobjektet. Default: `onResult() {}`.


## Exempel

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

