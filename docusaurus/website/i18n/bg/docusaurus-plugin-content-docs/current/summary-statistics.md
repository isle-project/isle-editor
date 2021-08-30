---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Обобщена статистика.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variables__ | `array<string> (required)`: променлива(и), за която(ито) да се изчислят статистическите данни. Default: `none`.
* __statistics__ | `array<string> (required)`: статистически данни, които да се изчислят за избраните променливи (или "Mean", `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, или `Quantile`). Default: `none`.
* __secondVariable__ | `string`: втора променлива за корелационната статистика. Default: `none`.
* __omit__ | `boolean`: контролира дали да се пропускат липсващи стойности.. Default: `false`.
* __group__ | `array<(string|Factor)>`: име на променливата(ите) за групиране. Default: `none`.
* __quantiles__ | `array`: масив от квантили за изчисляване на статистиката `Quantile`. Default: `none`.


## Примери

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
