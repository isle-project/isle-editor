---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Un componente de densidad basado en d3.

## Opciones

* __bandwidth__ | `number`: parámetro de suavizado para el estimador de la densidad del núcleo. Default: `4`.
* __histogram__ | `boolean`: muestran un histograma junto a la gráfica de densidad. Default: `true`.
* __nBins__ | `number`: número de cubos para el histograma superpuesto. Default: `8`.
* __vline__ | `object`: si se suministra, mostrará una línea vertical en el "valor" suministrado con una "etiqueta" dada. Default: `none`.
* __xlab__ | `string`: etiqueta del eje x. Default: `'value'`.
* __xmax__ | `number`: valor máximo mostrado en el eje x. Default: `1`.
* __xmin__ | `number`: valor mínimo mostrado en el eje x. Default: `0`.
* __ymax__ | `number`: valor máximo mostrado en el eje y. Default: `0.15`.


## Ejemplos

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

