---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Une parcelle de terrain.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `(array|string) (required)`: variable à afficher. Default: `none`.
* __group__ | `array`: une ou deux variables de regroupement. Default: `[]`.
* __orientation__ | `string`: l'orientation "verticale" ou "horizontale. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: contrôle de la superposition des points. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

