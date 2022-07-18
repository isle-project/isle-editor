---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

Grozdenje K-means.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variables__ | `array<string> (required)`: imena spremenljivk, uporabljenih za grozdenje. Default: `none`.
* __K__ | `number`: število grozdov. Default: `3`.
* __elbowPlot__ | `boolean`: boolean, ki označuje, ali naj se vključi graf komolca. Default: `false`.
* __initialization__ | `string`: metoda inicializacije (`kmeans++`, `random` ali `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: povratni klic, sprožen z objektom modela. Default: `onResult() {}`.


## Primeri

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

