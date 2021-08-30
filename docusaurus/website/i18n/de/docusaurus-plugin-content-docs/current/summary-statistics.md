---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Zusammenfassende Statistik.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variables__ | `array<string> (required)`: Variable(n), für die Statistiken berechnet werden sollen. Default: `none`.
* __statistics__ | `array<string> (required)`: Statistik(en), die für die ausgewählten Variablen berechnet werden sollen (entweder `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, oder `Quantile`). Default: `none`.
* __secondVariable__ | `string`: zweite Variable für die Korrelationsstatistik. Default: `none`.
* __omit__ | `boolean`: steuert, ob fehlende Werte ausgelassen werden sollen. Default: `false`.
* __group__ | `array<(string|Factor)>`: Name der Gruppierungsvariable(n). Default: `none`.
* __quantiles__ | `array`: Array der zu berechnenden Quantile für die `Quantile`-Statistik. Default: `none`.


## Beispiele

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
