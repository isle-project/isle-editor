---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

条形图。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 变量显示. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __yvar__ | `string`: 可选变量，用于列高(与`summary`一起使用). Default: `none`.
* __summary__ | `string`: 为 "yvar "计算并显示为每个类别的条形高度的统计名称(可以是 `Min`、`Max`、`Mean`、`Median`、`Sum`...). Default: `none`.
* __horizontal__ | `boolean`: 是否水平显示条形图. Default: `false`.
* __stackBars__ | `boolean`: 分组时，控制是否将条形图叠加在一起。. Default: `false`.
* __relative__ | `boolean`: 是否计算各组内的相对频率？. Default: `false`.
* __totalPercent__ | `boolean`: 是否将整体条形图显示为相对频率. Default: `false`.
* __xOrder__ | `string`: "总数"、"类别"、"最小值"、"最大值"、"平均值 "或 "中位数 "中的任意一个。. Default: `none`.
* __direction__ | `string`: 如何在X轴旁排列柱形图(`ascending` 或 `descending`). Default: `'ascending'`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
