---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

一个基于d3的密度图组件。

## 选项

* __bandwidth__ | `number`: 核密度估计器的平滑参数。. Default: `4`.
* __histogram__ | `boolean`: 在密度图旁显示直方图。. Default: `true`.
* __nBins__ | `number`: 叠加直方图的仓数。. Default: `8`.
* __vline__ | `object`: 如果提供，将在所提供的 "value "处用给定的 "label "显示一条垂直线。. Default: `none`.
* __xlab__ | `string`: x轴标签. Default: `'value'`.
* __xmax__ | `number`: X轴上显示的最大值. Default: `1`.
* __xmin__ | `number`: X轴上显示的最小值. Default: `0`.
* __ymax__ | `number`: Y轴上显示的最大值. Default: `0.15`.


## 例子

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

