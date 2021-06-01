---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means klaszterezés.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variables__ | `array<string> (required)`: a klaszterezéshez használt változók nevei. Default: `none`.
* __K__ | `number`: klaszterek száma. Default: `3`.
* __initialization__ | `string`: inicializálási módszer (`kmeans++`, `random` vagy `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: callback hívás a modell objektummal. Default: `onResult() {}`.


## Példák

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

