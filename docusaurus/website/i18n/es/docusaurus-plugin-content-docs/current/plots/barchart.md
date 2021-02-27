---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Gráfico de barras.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: variable a mostrar. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: nombre de la estadística para calcular para "yvar" y para ser mostrada como la altura de la barra para cada categoría. Default: `none`.
* __horizontal__ | `boolean`: si mostrar las barras horizontalmente. Default: `false`.
* __stackBars__ | `boolean`: cuando se agrupan, controla si se apilan las barras una encima de la otra. Default: `false`.
* __relative__ | `boolean`: si calcular las frecuencias relativas dentro de cada grupo. Default: `false`.
* __totalPercent__ | `boolean`: si mostrar las barras generales como frecuencias relativas. Default: `false`.
* __xOrder__ | `string`: ya sea "total", "categoría", "min", "máximo", "medio", o "medio".. Default: `none`.
* __direction__ | `string`: cómo ordenar las barras a lo largo del eje x (`ascendente` o `descendente`). Default: `'ascending'`.


## Ejemplos

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

