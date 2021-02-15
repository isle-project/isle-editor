---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

Agrupación jerárquica.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variables__ | `array<string> (required)`: nombres de las variables utilizadas para la agrupación. Default: `none`.
* __linkage__ | `string`: ya sea "completo" o "único".. Default: `'complete'`.
* __distance__ | `string`: distancia usada (euclidiano, chebyshev, coseno, martillo o manhattan).. Default: `'euclidean'`.
* __onResult__ | `function`: llamada de retorno invocada con el objeto modelo. Default: `onResult() {}`.


## Examples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

