---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

一个饼图组件，默认情况下，它显示所选变量的所有类别的计数。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量显示. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __summaryVariable__ | `string`: 可选的变量，每个 "变量 "类别的总和要显示。. Default: `none`.


## 例子

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

