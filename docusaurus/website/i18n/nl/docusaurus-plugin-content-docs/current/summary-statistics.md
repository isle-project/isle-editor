---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Samenvattende statistieken.

## Opties

* __data__ | `object (required)`: object van waarde-arrays. Default: `none`.
* __variables__ | `array<string> (required)`: variabele(n) waarvoor de statistieken moeten worden berekend. Default: `none`.
* __statistics__ | `array<string> (required)`: te berekenen statistiek(en) voor de geselecteerde variabelen (ofwel `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, of `Quantile`). Default: `none`.
* __secondVariable__ | `string`: tweede variabele voor correlatiestatistiek. Default: `none`.
* __omit__ | `boolean`: bepaalt of ontbrekende waarden moeten worden weggelaten. Default: `false`.
* __group__ | `array<(string|Factor)>`: naam van de groeperingsvariabele(n). Default: `none`.
* __quantiles__ | `array`: array van kwantielen te berekenen voor `Quantile` statistiek. Default: `none`.


## Voorbeelden

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
