---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

一个饼图组件，默认情况下，它显示所选变量的所有类别的计数。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 变量显示. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __summaryVariable__ | `string`: 可选的变量，每个 "变量 "类别的总和要显示。. Default: `none`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
