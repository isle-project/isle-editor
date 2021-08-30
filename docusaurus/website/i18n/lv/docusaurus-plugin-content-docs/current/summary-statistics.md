---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Kopsavilkuma statistika.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variables__ | `array<string> (required)`: mainīgais(-ie), attiecībā uz kuru(-iem) aprēķināt statistiku.. Default: `none`.
* __statistics__ | `array<string> (required)`: statistika(-as), kas jāaprēķina izvēlētajiem mainīgajiem lielumiem (vai nu `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, vai `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: otrais mainīgais lielums korelācijas statistikai. Default: `none`.
* __omit__ | `boolean`: kontrolē, vai izlaist trūkstošās vērtības.. Default: `false`.
* __group__ | `array<(string|Factor)>`: grupēšanas mainīgā(-o) nosaukums. Default: `none`.
* __quantiles__ | `array`: kvantiļu masīvs, kas jāaprēķina `Kvantiļu` statistikai. Default: `none`.


## Piemēri

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
