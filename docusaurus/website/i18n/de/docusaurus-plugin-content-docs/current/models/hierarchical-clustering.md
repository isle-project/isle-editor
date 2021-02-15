---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchisches Clustering.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variables__ | `array<string> (required)`: Namen der Variablen, die für das Clustering verwendet werden. Default: `none`.
* __linkage__ | `string`: entweder `komplett` oder `einzeln`. Default: `'complete'`.
* __distance__ | `string`: verwendeter Abstand (`euklidisch`, `Tschebyscheff`, `Kosinus`, `Hamming` oder `Manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: Callback, der mit Modellobjekt aufgerufen wird. Default: `onResult() {}`.


## Examples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

