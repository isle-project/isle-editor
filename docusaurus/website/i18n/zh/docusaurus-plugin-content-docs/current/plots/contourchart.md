---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

等高线图。

## 选项

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __x__ | `string (required)`: x轴变量. Default: `none`.
* __y__ | `string (required)`: y轴变量. Default: `none`.
* __overlayPoints__ | `boolean`: 控制是否对每个观测点进行叠加. Default: `false`.
* __smoothSpan__ | `number`: 平滑跨度. Default: `0.66`.
* __regressionMethod__ | `array<string>`: 包含 "linear "和/或 "smooth "的数组，用于覆盖线性和/或平滑回归线。. Default: `none`.
* __onSelected__ | `function`: 当用x，y值选择点时，回调被调用，并且被选择的点. Default: `onSelected() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
