---
id: histogram
title: Histogram
sidebar_label: Histogram
---

一个直方图。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量显示. Default: `none`.
* __group__ | `string`: 分组变量. Default: `none`.
* __groupMode__ | `string`: 是将分组直方图叠加在一起("Overlay")，还是叠加在彼此相邻的独立图中("Facets"). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: 控制是否在y轴上显示密度值而不是计数。. Default: `false`.
* __densityType__ | `string`: 当显示密度时，可以覆盖一个参数分布("正态"、"均匀 "或 "指数")或一个非参数核密度估计("数据驱动"). Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: 分仓策略（"自动"、"选择仓数 "或 "设置仓宽"）。. Default: `'Automatic'`.
* __nBins__ | `number`: 自定义箱数. Default: `none`.
* __nCols__ | `number`: 显示分面分组直方图时的列数。. Default: `none`.
* __xBins__ | `{start,size,end}`: 对象，具有 "start"、"size "和 "end "属性，管理分批行为。. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

