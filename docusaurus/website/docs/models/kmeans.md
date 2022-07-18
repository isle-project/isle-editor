---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means clustering.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variables__ | `array<string> (required)`: names of variables used for clustering. Default: `none`.
* __K__ | `number`: number of clusters. Default: `3`.
* __elbowPlot__ | `boolean`: boolean indicating whether to include the elbow plot. Default: `false`.
* __initialization__ | `string`: initialization method (`kmeans++`, `random`, or `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback invoked with model object. Default: `onResult() {}`.


## Examples

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

