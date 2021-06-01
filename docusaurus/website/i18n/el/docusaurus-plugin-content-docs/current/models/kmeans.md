---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

Ομαδοποίηση K-means.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variables__ | `array<string> (required)`: ονόματα μεταβλητών που χρησιμοποιούνται για την ομαδοποίηση. Default: `none`.
* __K__ | `number`: αριθμός συστάδων. Default: `3`.
* __initialization__ | `string`: μέθοδος αρχικοποίησης (`kmeans++`, `random`, ή `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback που καλείται με το αντικείμενο του μοντέλου. Default: `onResult() {}`.


## Παραδείγματα

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

