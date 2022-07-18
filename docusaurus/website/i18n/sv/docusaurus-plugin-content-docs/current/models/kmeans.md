---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means klustring.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variables__ | `array<string> (required)`: Namn på variabler som används för klusterbildning.. Default: `none`.
* __K__ | `number`: antal kluster. Default: `3`.
* __elbowPlot__ | `boolean`: Boolean som anger om armbågsdiagrammet ska inkluderas.. Default: `false`.
* __initialization__ | `string`: Initialiseringsmetod (`kmeans++`, `random` eller `mostDistant`).. Default: `'kmeans++'`.
* __onResult__ | `function`: callback som anropas med modellobjektet. Default: `onResult() {}`.


## Exempel

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

