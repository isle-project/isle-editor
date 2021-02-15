---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Un componente de gráfico circular que por defecto muestra los recuentos de todas las categorías de una variable elegida.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: variable a mostrar. Default: `none`.
* __group__ | `string`: variable de agrupación. Default: `none`.
* __summaryVariable__ | `string`: variable opcional cuya suma para mostrar para cada categoría de "variable".... Default: `none`.


## Examples

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

