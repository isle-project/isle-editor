---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Statistici sumare.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variables__ | `array<string> (required)`: variabila (variabilele) pentru care se calculează statisticile. Default: `none`.
* __statistics__ | `array<string> (required)`: statistica (statisticile) de calculat pentru variabilele selectate (fie `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, sau `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: a doua variabilă pentru statistica de corelație. Default: `none`.
* __omit__ | `boolean`: controlează dacă se omit valorile lipsă. Default: `false`.
* __group__ | `array<(string|Factor)>`: denumirea variabilei (variabilelor) de grupare. Default: `none`.
* __quantiles__ | `array`: matrice de cuantile de calculat pentru statistica `Quantile`.. Default: `none`.


## Exemple

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
