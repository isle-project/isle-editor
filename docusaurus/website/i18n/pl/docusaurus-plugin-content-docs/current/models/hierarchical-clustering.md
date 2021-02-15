---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchiczne zgrupowanie.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variables__ | `array<string> (required)`: nazwy zmiennych wykorzystywanych do tworzenia klastrów. Default: `none`.
* __linkage__ | `string`: albo "kompletne" albo "pojedyncze. Default: `'complete'`.
* __distance__ | `string`: używany dystans (`euklidesowy`, `chebyshev`, `kosinowy`, `hammingowy`, lub `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: wywołanie zwrotne z obiektem wzorcowym. Default: `onResult() {}`.


## Examples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

