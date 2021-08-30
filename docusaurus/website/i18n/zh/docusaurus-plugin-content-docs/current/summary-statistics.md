---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

简要统计。

## 选项

* __data__ | `object (required)`: 值数组的对象. Default: `none`.
* __variables__ | `array<string> (required)`: 计算统计数据的变量. Default: `none`.
* __statistics__ | `array<string> (required)`: 计算所选变量的统计数据（`Mean`，`Median`,`Min`,`Max`,`Range`,`Interquartile Range`,`Standard Deviation`,`Variance`,`Correlation`,`Correlation Matrix`,`Skewness`,`Excess Kurtosis`,`First Quartile`,`Third Quartile`,或`Quantile`). Default: `none`.
* __secondVariable__ | `string`: 相关统计学的第二个变量. Default: `none`.
* __omit__ | `boolean`: 控制是否省略缺失值. Default: `false`.
* __group__ | `array<(string|Factor)>`: 分组变量的名称. Default: `none`.
* __quantiles__ | `array`: 为 "Quantile "统计数字计算的定量数组. Default: `none`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'group' },
        { label: 'Quantiles', value: 'quantiles' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
/>
```

</TabItem>

<TabItem value="group" >

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
    group={[ 'Gender' ]}
/>
```
</TabItem>

<TabItem value="quantiles">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Quantile' ]}
    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}
/>
```

</TabItem>

</Tabs>
