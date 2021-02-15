---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Un camembert qui, par défaut, affiche les comptes de toutes les catégories d'une variable choisie.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: variable à afficher. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __summaryVariable__ | `string`: variable optionnelle dont la somme doit être affichée pour chaque catégorie de "variable. Default: `none`.


## Examples

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

