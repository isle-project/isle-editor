---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

盒状图。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `(array|string) (required)`: 变量显示. Default: `none`.
* __group__ | `array`: 一两个分组变量. Default: `[]`.
* __orientation__ | `string`: "垂直 "或 "水平 "方向；. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: 控制是否叠加点. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

