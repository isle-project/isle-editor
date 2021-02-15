---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Una trama de violín.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: variable a mostrar. Default: `none`.
* __group__ | `string`: variable de agrupación. Default: `none`.
* __showBox__ | `boolean`: controla si se muestra un gráfico de caja en el interior. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

