---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means klasterdamine.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array<string> (required)`: klasterdamiseks kasutatavate muutujate nimed. Default: `none`.
* __K__ | `number`: klastrite arv. Default: `3`.
* __elbowPlot__ | `boolean`: boolean, mis näitab, kas lisada küünarnuki joonis. Default: `false`.
* __initialization__ | `string`: initsialiseerimismeetod (`kmeans++`, `random` või `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback kutsutakse üles koos mudeli objektiga. Default: `onResult() {}`.


## Näited

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

