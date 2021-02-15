---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

A mosaic plot.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __variables__ | `array (required)`: array of variables to display. Default: `none`.
* __showColors__ | `boolean`: controls whether to display colors showing significance. Default: `false`.
* __axisLabels__ | `string`: grouping variable. Default: `'parallel to the axis'`.


## Examples

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
