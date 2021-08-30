---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Summary statistics.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variables__ | `array<string> (required)`: variable(s) for which to calculate statistics. Default: `none`.
* __statistics__ | `array<string> (required)`: statistics(s) to calculate for the selected variables (either 'Mean', `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, or `Quantile`). Default: `none`.
* __secondVariable__ | `string`: second variable for correlation statistic. Default: `none`.
* __omit__ | `boolean`: controls whether to omit missing values. Default: `false`.
* __group__ | `array<(string|Factor)>`: name of grouping variable(s). Default: `none`.
* __quantiles__ | `array`: array of quantiles to calculate for `Quantile` statistic. Default: `none`.


## Examples

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
