---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-vidurkių klasterizavimas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizacijai naudojamų kintamųjų pavadinimai. Default: `none`.
* __K__ | `number`: klasterių skaičius. Default: `3`.
* __elbowPlot__ | `boolean`: loginis rodiklis, nurodantis, ar įtraukti alkūnės sklypą. Default: `false`.
* __initialization__ | `string`: iniciacijos metodas (`kmeans++`, `random` arba `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: atgalinis skambutis, iškviestas su modelio objektu. Default: `onResult() {}`.


## Pavyzdžiai

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

