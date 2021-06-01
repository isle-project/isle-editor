---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarchikus klaszterezés.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variables__ | `array<string> (required)`: a klaszterezéshez használt változók nevei. Default: `none`.
* __linkage__ | `string`: vagy "teljes" vagy "egyes".. Default: `'complete'`.
* __distance__ | `string`: használt távolság (`euklideszi`, `chebyshev`, `cosine`, `hamming`, vagy `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback hívás a modell objektummal. Default: `onResult() {}`.


## Példák

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

