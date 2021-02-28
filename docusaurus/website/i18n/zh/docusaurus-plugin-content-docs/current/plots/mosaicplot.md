---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

一个马赛克情节。

## 选项

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __variables__ | `array (required)`: 要显示的变量数组. Default: `none`.
* __showColors__ | `boolean`: 控制是否显示显示意义的颜色. Default: `false`.
* __axisLabels__ | `string`: 轴标签的定位（"平行于轴"、"水平"、"垂直于轴 "或 "垂直"）；. Default: `'parallel to the axis'`.


## 例子

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
