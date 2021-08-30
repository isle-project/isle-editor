---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Sammanfattande statistik.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variables__ | `array<string> (required)`: Variabel(er) för vilken/vilka statistik ska beräknas.. Default: `none`.
* __statistics__ | `array<string> (required)`: statistik som ska beräknas för de valda variablerna (antingen `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, eller `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: andra variabeln för korrelationsstatistik. Default: `none`.
* __omit__ | `boolean`: kontrollerar om saknade värden ska utelämnas. Default: `false`.
* __group__ | `array<(string|Factor)>`: Namnet på grupperingsvariabeln eller grupperingsvariablerna.. Default: `none`.
* __quantiles__ | `array`: matris av kvantilar som ska beräknas för `Quantile`-statistiken.. Default: `none`.


## Exempel

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
