---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Um componente de gráfico de densidade baseado em d3.

## Options

* __bandwidth__ | `number`: parâmetro de suavização para o estimador de densidade do grão. Default: `4`.
* __histogram__ | `boolean`: mostrar um histograma ao lado do gráfico de densidade. Default: `true`.
* __nBins__ | `number`: número de silos para o histograma sobreposto.. Default: `8`.
* __vline__ | `object`: se fornecido, exibirá uma linha vertical no "valor" fornecido com um determinado "rótulo".. Default: `none`.
* __xlab__ | `string`: etiqueta do eixo x. Default: `'value'`.
* __xmax__ | `number`: valor máximo exibido no eixo x. Default: `1`.
* __xmin__ | `number`: valor mínimo exibido no eixo x. Default: `0`.
* __ymax__ | `number`: valor máximo exibido no eixo y. Default: `0.15`.


## Examples

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

