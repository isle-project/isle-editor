---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

一个马赛克情节。

## Options

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __variables__ | `array (required)`: 要显示的变量数组. Default: `none`.
* __showColors__ | `boolean`: 控制是否显示显示意义的颜色. Default: `false`.
* __axisLabels__ | `string`: 分组变量. Default: `'parallel to the axis'`.


## Examples

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
