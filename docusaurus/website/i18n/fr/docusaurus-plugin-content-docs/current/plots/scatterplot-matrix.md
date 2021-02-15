---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Une matrice de nuage de points.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __variables__ | `array (required)`: tableau de variables à afficher dans une matrice. Default: `none`.
* __color__ | `string`: variable catégorielle à cartographier à la couleur des points. Default: `none`.


## Examples

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

