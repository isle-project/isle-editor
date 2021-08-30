---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Súhrnné štatistiky.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variables__ | `array<string> (required)`: premenná(-y), pre ktorú(-é) sa má(-ú) vypočítať štatistika. Default: `none`.
* __statistics__ | `array<string> (required)`: štatistiky, ktoré sa majú vypočítať pre vybrané premenné (buď `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, alebo `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: druhá premenná pre korelačnú štatistiku. Default: `none`.
* __omit__ | `boolean`: kontroluje, či sa majú vynechať chýbajúce hodnoty.. Default: `false`.
* __group__ | `array<(string|Factor)>`: názov zoskupujúcej premennej (premenných). Default: `none`.
* __quantiles__ | `array`: pole kvantilov na výpočet pre štatistiku `Quantile`. Default: `none`.


## Príklady

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
