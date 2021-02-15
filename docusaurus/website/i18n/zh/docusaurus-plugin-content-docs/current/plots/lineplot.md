---
id: lineplot
title: Line Plot
sidebar_label: Line Plot
---

一条线图。

## Options

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __x__ | `string`: x轴变量. Default: `none`.
* __y__ | `string (required)`: y轴变量. Default: `none`.
* __group__ | `string`: 分组变量. Default: `none`.
* __showPoints__ | `boolean`: 控制是否在每个观测点上叠加点. Default: `false`.


## Examples

```jsx live
<LinePlot 
    data={heartdisease} 
    x="Cost"
    y="Drugs"
/>
```

