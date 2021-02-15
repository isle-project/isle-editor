---
id: lineplot
title: Line Plot
sidebar_label: Line Plot
---

Un tracé de ligne.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __x__ | `string`: variable de l'axe des x. Default: `none`.
* __y__ | `string (required)`: variable de l'axe des y. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __showPoints__ | `boolean`: contrôle de la superposition éventuelle de points à chaque observation. Default: `false`.


## Examples

```jsx live
<LinePlot 
    data={heartdisease} 
    x="Cost"
    y="Drugs"
/>
```

