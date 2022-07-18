---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-vidu klasterizācija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variables__ | `array<string> (required)`: klasterizēšanai izmantoto mainīgo nosaukumi. Default: `none`.
* __K__ | `number`: klasteru skaits. Default: `3`.
* __elbowPlot__ | `boolean`: boolean, kas norāda, vai iekļaut elkoņa laukumu. Default: `false`.
* __initialization__ | `string`: inicializācijas metode (`kmeans++`, `random` vai `mostDistant`).. Default: `'kmeans++'`.
* __onResult__ | `function`: callback, kas izsaukts ar modeļa objektu. Default: `onResult() {}`.


## Piemēri

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

