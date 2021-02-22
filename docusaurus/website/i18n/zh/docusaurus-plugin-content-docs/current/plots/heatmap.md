---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

热图用于可视化两个变量之间的关系。

## 选项

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __x__ | `string (required)`: x轴变量. Default: `none`.
* __y__ | `string (required)`: y轴变量. Default: `none`.
* __overlayPoints__ | `boolean`: 控制是否对每个观测点进行叠加. Default: `false`.
* __smoothSpan__ | `number`: 平滑跨度. Default: `0.66`.
* __regressionMethod__ | `array<string>`: 包含 "linear "和/或 "smooth "的数组，用于覆盖线性和/或平滑回归线。. Default: `none`.
* __alternateColor__ | `boolean`: 控制是否为热图使用其他颜色方案。. Default: `false`.
* __commonXAxis__ | `boolean`: 控制在按分组变量的值创建多个热图时是否使用共同的X轴。. Default: `false`.
* __commonYAxis__ | `boolean`: 控制在按分组变量的值创建多个热图时是否使用共同的Y轴。. Default: `false`.


## 例子

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

