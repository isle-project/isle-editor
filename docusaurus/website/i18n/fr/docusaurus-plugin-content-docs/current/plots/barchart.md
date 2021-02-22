---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Diagramme en barres.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: variable à afficher. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: nom de la statistique à calculer pour l'"yvar" et à afficher sous forme de barre de hauteur pour chaque catégorie. Default: `none`.
* __horizontal__ | `boolean`: si les barres doivent être affichées horizontalement. Default: `false`.
* __stackBars__ | `boolean`: lors du regroupement, contrôle s'il faut empiler les barres les unes sur les autres. Default: `false`.
* __relative__ | `boolean`: s'il faut calculer les fréquences relatives à l'intérieur de chaque groupe. Default: `false`.
* __totalPercent__ | `boolean`: l'affichage ou non des barres globales en tant que fréquences relatives. Default: `false`.
* __xOrder__ | `string`: soit "total", "catégorie", "min", "max", "moyen" ou "médian. Default: `none`.
* __direction__ | `string`: comment ordonner les barres le long de l'axe des x ("ascendant" ou "descendant"). Default: `'ascending'`.


## Exemples

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

