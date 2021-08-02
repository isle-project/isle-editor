---
id: histogram
title: Histogram
sidebar_label: Histogram
---

一个直方图。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量显示. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __groupMode__ | `string`: 是将分组直方图叠加在一起("Overlay")，还是叠加在彼此相邻的独立图中("Facets"). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: 控制是否在y轴上显示密度值而不是计数。. Default: `false`.
* __densityType__ | `string`: 当显示密度时，可以覆盖一个参数分布("正态"、"均匀 "或 "指数")或一个非参数核密度估计("数据驱动"). Default: `none`.
* __bandwidthAdjust__ | `number`: 手动调整内核密度的带宽（仅在 "密度类型 "设置为 "数据驱动 "时适用）。. Default: `1`.
* __binStrategy__ | `string`: 分仓策略（"自动"、"选择仓数 "或 "设置仓宽"）。. Default: `'Automatic'`.
* __nBins__ | `number`: 自定义箱数. Default: `none`.
* __nCols__ | `number`: 显示分面分组直方图时的列数。. Default: `none`.
* __xBins__ | `{start,size,end}`: 对象，具有 "start"、"size "和 "end "属性，管理分批行为。. Default: `{}`.
* __sameXRange__ | `boolean`: 如果为真，每个面的X轴范围将与整个直方图相同。. Default: `false`.
* __sameYRange__ | `boolean`: 如果为真，每个面的Y轴范围将与整个直方图相同。. Default: `false`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
