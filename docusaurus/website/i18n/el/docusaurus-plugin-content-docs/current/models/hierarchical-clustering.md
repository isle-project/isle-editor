---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Ιεραρχική ομαδοποίηση.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variables__ | `array<string> (required)`: ονόματα μεταβλητών που χρησιμοποιούνται για την ομαδοποίηση. Default: `none`.
* __linkage__ | `string`: είτε "πλήρης" είτε "μεμονωμένη. Default: `'complete'`.
* __distance__ | `string`: χρησιμοποιούμενη απόσταση (`ευκλείδεια`, `chebyshev`, `cosine`, `hamming`, ή `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: callback που καλείται με το αντικείμενο του μοντέλου. Default: `onResult() {}`.


## Παραδείγματα

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

