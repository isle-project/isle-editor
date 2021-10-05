---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

计算一个数组的最小值和最大值。

## 选项

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __xval__ | `string (required)`: 在X轴上显示的变量. Default: `none`.
* __yval__ | `string (required)`: 在Y轴上显示的变量. Default: `none`.
* __text__ | `(string|Factor)`: 每个点旁边都有文字显示. Default: `none`.
* __color__ | `(string|Factor)`: 分类变量，以映射到点的颜色。. Default: `none`.
* __type__ | `(string|Factor)`: 对应到显示的符号的分类变量。. Default: `none`.
* __size__ | `string`: 量化变量，以映射到点的大小。. Default: `none`.
* __regressionLine__ | `boolean`: 控制是否覆盖回归线。. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear`和/或`smooth`显示线性回归和平滑的LOWESS回归线。. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: 为每一类指定的分类变量显示单独的回归线。. Default: `none`.
* __smoothSpan__ | `number`: 平滑回归线的平滑跨度参数. Default: `0.66`.
* __jitterX__ | `boolean`: 控制是否对X轴上的点进行抖动. Default: `false`.
* __jitterY__ | `boolean`: 控制是否对Y轴上的点进行抖动. Default: `false`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
