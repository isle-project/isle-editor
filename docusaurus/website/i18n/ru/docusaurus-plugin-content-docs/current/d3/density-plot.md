---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Компонент графика плотности на основе d3.

## Options

* __bandwidth__ | `number`: параметр сглаживания для ядро-оценщика плотности. Default: `4`.
* __histogram__ | `boolean`: показать гистограмму рядом с графиком плотности. Default: `true`.
* __nBins__ | `number`: количество бункеров для наложенной гистограммы.. Default: `8`.
* __vline__ | `object`: если поставляется, будет отображаться вертикальная линия на поставляемом `значении` с заданным `ярлыком`.. Default: `none`.
* __xlab__ | `string`: метка оси х. Default: `'value'`.
* __xmax__ | `number`: максимальное значение, отображаемое по оси х. Default: `1`.
* __xmin__ | `number`: минимальное значение, отображаемое по оси х. Default: `0`.
* __ymax__ | `number`: максимальное значение, отображаемое по оси Y. Default: `0.15`.


## Examples

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

