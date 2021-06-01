---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Hierarhično grozdenje.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variables__ | `array<string> (required)`: imena spremenljivk, uporabljenih za grozdenje. Default: `none`.
* __linkage__ | `string`: bodisi `kompletno` ali `posamezno`. Default: `'complete'`.
* __distance__ | `string`: uporabljena razdalja (`evklidska`, `čebyševska`, `kosinska`, `hamming` ali `manhattanska`). Default: `'euclidean'`.
* __onResult__ | `function`: povratni klic, sprožen z objektom modela. Default: `onResult() {}`.


## Primeri

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

