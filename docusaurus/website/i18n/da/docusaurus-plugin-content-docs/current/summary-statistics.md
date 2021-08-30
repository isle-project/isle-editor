---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Sammenfattende statistik.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variables__ | `array<string> (required)`: variabel(er), for hvilken (hvilke) der skal beregnes statistik. Default: `none`.
* __statistics__ | `array<string> (required)`: statistik(er), der skal beregnes for de valgte variabler (enten `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, eller `Quantile`). Default: `none`.
* __secondVariable__ | `string`: anden variabel for korrelationsstatistik. Default: `none`.
* __omit__ | `boolean`: kontrollerer, om manglende værdier skal udelades. Default: `false`.
* __group__ | `array<(string|Factor)>`: navn på grupperingsvariable(r). Default: `none`.
* __quantiles__ | `array`: array af kvanler, der skal beregnes for `Quantile`-statistikken. Default: `none`.


## Eksempler

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
