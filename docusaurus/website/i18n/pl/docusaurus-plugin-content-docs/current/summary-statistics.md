---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Statystyki podsumowujące.

## Opcje

* __data__ | `object (required)`: obiekt tablic wartości. Default: `none`.
* __variables__ | `array<string> (required)`: zmienna(-e), dla której(-ych) należy obliczyć statystyki. Default: `none`.
* __statistics__ | `array<string> (required)`: statystyka(-i) do obliczenia dla wybranych zmiennych (albo `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, lub `Quantile`). Default: `none`.
* __secondVariable__ | `string`: druga zmienna dla statystyki korelacji. Default: `none`.
* __omit__ | `boolean`: kontroluje, czy pominąć brakujące wartości. Default: `false`.
* __group__ | `array<(string|Factor)>`: nazwa zmiennej(-ych) grupującej(-ych). Default: `none`.
* __quantiles__ | `array`: tablica kwantyli do obliczenia dla statystyki `Quantyl`.. Default: `none`.


## Przykłady

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
