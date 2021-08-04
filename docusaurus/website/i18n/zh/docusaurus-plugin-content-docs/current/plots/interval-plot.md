---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

一个区间图。

## 选项

* __data__ | `object (required)`: 值数组的对象. Default: `none`.
* __variable__ | `string (required)`: undefined. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __orientation__ | `string`: 垂直 "或 "水平 "方向. Default: `'vertical'`.
* __significanceLevel__ | `number`: undefined. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: 控制是否调整显著性水平以控制错误发现率. Default: `false`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Custom Significance Level', value: 'significance' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />
```
</TabItem>

<TabItem value="horizontal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />
```

</TabItem>

<TabItem value="significance">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />
```
</TabItem>

</Tabs>
