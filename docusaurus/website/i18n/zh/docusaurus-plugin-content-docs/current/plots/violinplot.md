---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

一个小提琴情节。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量显示. Default: `none`.
* __group__ | `string`: 分组变量. Default: `none`.
* __showBox__ | `boolean`: 控制是否在. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

