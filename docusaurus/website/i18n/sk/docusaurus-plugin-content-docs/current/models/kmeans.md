---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means zhlukovanie.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variables__ | `array<string> (required)`: názvy premenných použitých na zhlukovanie. Default: `none`.
* __K__ | `number`: počet klastrov. Default: `3`.
* __elbowPlot__ | `boolean`: boolean určujúci, či sa má zahrnúť graf lakťa. Default: `false`.
* __initialization__ | `string`: inicializačná metóda (`kmeans++`, `random` alebo `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: spätné volanie vyvolané pomocou objektu modelu. Default: `onResult() {}`.


## Príklady

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

