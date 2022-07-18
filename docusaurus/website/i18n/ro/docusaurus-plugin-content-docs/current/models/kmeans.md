---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

Gruparea K-means.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variables__ | `array<string> (required)`: numele variabilelor utilizate pentru grupare. Default: `none`.
* __K__ | `number`: numărul de clustere. Default: `3`.
* __elbowPlot__ | `boolean`: boolean care indică dacă se include sau nu diagrama cotului. Default: `false`.
* __initialization__ | `string`: metoda de inițializare (`kmeans++`, `random`, sau `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback invocat cu obiectul model. Default: `onResult() {}`.


## Exemple

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

