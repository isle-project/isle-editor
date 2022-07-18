---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-Mittel-Clustering.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variables__ | `array<string> (required)`: Namen der Variablen, die für das Clustering verwendet werden. Default: `none`.
* __K__ | `number`: Anzahl von Clustern. Default: `3`.
* __elbowPlot__ | `boolean`: boolescher Wert, der angibt, ob das Ellbogenplot einbezogen werden soll. Default: `false`.
* __initialization__ | `string`: Initialisierungsmethode (`kmeans++`, `random`, oder `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: Callback, der mit Modellobjekt aufgerufen wird. Default: `onResult() {}`.


## Beispiele

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

