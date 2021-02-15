---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Une intrigue au violon.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: variable à afficher. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __showBox__ | `boolean`: contrôle l'affichage ou non d'un box plot à l'intérieur. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

