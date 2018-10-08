# Density Plot

A d3-based density plot component.

#### Example:

``` js
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/density-plot/)

#### Options:

* __bandwidth__ | `number`:  smoothing parameter for the kernel density estimator. Default: `4`.
* __histogram__ | `boolean`: show a histogram alongside the density plot. Default: `true`.
* __nBins__ | `number`: number of bins for the overlaid histogram.. Default: `8`.
* __vline__ | `object`: if supplied, will display a vertical line at the supplied `value` with a given `label`. Default: `none`.
* __xlab__ | `string`: x-axis label. Default: `'value'`.
* __xmax__ | `number`: maximum value displayed on the x-axis. Default: `1`.
* __xmin__ | `number`: minimum value displayed on the x-axis. Default: `0`.
* __ymax__ | `number`: maximum value displayed on the y-axis. Default: `0.15`.
