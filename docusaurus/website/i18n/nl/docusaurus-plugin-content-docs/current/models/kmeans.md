---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K- betekent clustering.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variables__ | `array<string> (required)`: namen van variabelen die worden gebruikt voor het clusteren. Default: `none`.
* __K__ | `number`: aantal clusters. Default: `3`.
* __elbowPlot__ | `boolean`: booleaans die aangeeft of de elleboogplot moet worden opgenomen. Default: `false`.
* __initialization__ | `string`: initialisatiemethode (`kmaan++`, `willekeurig`, of `meestafgelegen`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback ingeroepen met modelobject. Default: `onResult() {}`.


## Voorbeelden

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

