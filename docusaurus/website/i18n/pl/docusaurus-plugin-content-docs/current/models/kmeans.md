---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-znaczy grupowanie.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variables__ | `array<string> (required)`: nazwy zmiennych wykorzystywanych do tworzenia klastrów. Default: `none`.
* __K__ | `number`: liczba klastrów. Default: `3`.
* __initialization__ | `string`: metoda inicjalizacji (`kmeans++`, `random`, lub `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: wywołanie zwrotne z obiektem wzorcowym. Default: `onResult() {}`.


## Examples

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

