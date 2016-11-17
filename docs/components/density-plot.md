# Density Plot

ISLE component to generate a density plot for one or multiple data sets.

#### Example:

``` html
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

#### Options

* __data__: an `array` or `array of arrays` holding the data for which the density plot should be created.
* __xmin__: minimum value displayed on the x-axis. Default: `0`.
* __xmax__: maximum value displayed on the x-axis. Default: `1`.
* __ymax__: maximum value displayed on the y-axis. Default: `0.15`.
* __width__: `number` giving the width of the created plot (in px). Default: `600`.
* __height__: `number` giving the height of the created plot (in px). Default: `300`.
* __nBins__: `number` of bins for the overlaid histogram. Default: `8`.
* __bandwith__:  smoothing parameter for the kernel density estimator. Must be a `number` greater than zero. Default: `4.`
