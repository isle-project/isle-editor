---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

条形图。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量显示. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: 为 "yvar "计算的统计数据名称，并作为每个类别的条形高度显示。. Default: `none`.
* __horizontal__ | `boolean`: 是否水平显示条形图. Default: `false`.
* __stackBars__ | `boolean`: 分组时，控制是否将条形图叠加在一起。. Default: `false`.
* __relative__ | `boolean`: 是否计算各组内的相对频率？. Default: `false`.
* __totalPercent__ | `boolean`: 是否将整体条形图显示为相对频率. Default: `false`.
* __xOrder__ | `string`: "总数"、"类别"、"最小值"、"最大值"、"平均值 "或 "中位数 "中的任意一个。. Default: `none`.
* __direction__ | `string`: 如何在X轴旁排列柱形图（"升 "或 "降"）？. Default: `'ascending'`.


## 例子

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

