---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchical Clustering.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variables__ | `array<string> (required)`: names of variables used for clustering. Default: `none`.
* __linkage__ | `string`: either `complete` or `single`. Default: `'complete'`.
* __distance__ | `string`: used distance (`euclidean`, `chebyshev`, `cosine`, `hamming`, or `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback invoked with model object. Default: `onResult() {}`.


## Examples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

