---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

Shlukování K-means.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variables__ | `array<string> (required)`: názvy proměnných použitých pro shlukování. Default: `none`.
* __K__ | `number`: počet klastrů. Default: `3`.
* __elbowPlot__ | `boolean`: boolean určující, zda se má zahrnout graf lokte. Default: `false`.
* __initialization__ | `string`: inicializační metoda (`kmeans++`, `random` nebo `mostDistant`).. Default: `'kmeans++'`.
* __onResult__ | `function`: zpětné volání vyvolané pomocí objektu modelu. Default: `onResult() {}`.


## Příklady

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

