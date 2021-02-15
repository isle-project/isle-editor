---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

A scatter plot.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __xval__ | `string (required)`: variable to display on the x-axis. Default: `none`.
* __yval__ | `string (required)`: variable to display on the y-axis. Default: `none`.
* __text__ | `string`: texts to be displayed next to each point. Default: `none`.
* __color__ | `string`: categorical variable to map to color of points. Default: `none`.
* __type__ | `string`: categorical variable to map to the displayed symbols. Default: `none`.
* __size__ | `string`: quantitative variable to map to the size of the points. Default: `none`.
* __regressionLine__ | `boolean`: controls whether to overlay regression line(s). Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` and/or `smooth` to display linear regression and smoothed LOWESS regression line. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: display separate regression line for each category of specified categorical variable. Default: `none`.
* __smoothSpan__ | `number`: smoothing span parameter for `smooth` regression line. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

