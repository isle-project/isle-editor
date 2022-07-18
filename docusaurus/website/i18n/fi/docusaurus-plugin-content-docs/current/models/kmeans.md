---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means-klusterointi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variables__ | `array<string> (required)`: klusteroinnissa käytettävien muuttujien nimet. Default: `none`.
* __K__ | `number`: klusterien lukumäärä. Default: `3`.
* __elbowPlot__ | `boolean`: boolean, joka ilmaisee, sisällytetäänkö kyynärpään kuvaaja mukaan.. Default: `false`.
* __initialization__ | `string`: alustamismenetelmä (`kmeans++`, `random` tai `mostDistant`).. Default: `'kmeans++'`.
* __onResult__ | `function`: callback kutsutaan malliobjektilla. Default: `onResult() {}`.


## Esimerkkejä

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

