---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means-gruppering.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variables__ | `array<string> (required)`: navne på variabler, der anvendes til klyngeopdeling. Default: `none`.
* __K__ | `number`: antal klynger. Default: `3`.
* __elbowPlot__ | `boolean`: boolean, der angiver, om albueplottet skal medtages. Default: `false`.
* __initialization__ | `string`: initialiseringsmetode (`kmeans++`, `random` eller `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback påkaldt med modelobjekt. Default: `onResult() {}`.


## Eksempler

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

