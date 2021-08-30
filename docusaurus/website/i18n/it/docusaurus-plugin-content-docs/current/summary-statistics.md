---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Statistiche riassuntive.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori. Default: `none`.
* __variables__ | `array<string> (required)`: variabile(i) per la quale calcolare le statistiche. Default: `none`.
* __statistics__ | `array<string> (required)`: statistiche da calcolare per le variabili selezionate (o `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, o `Quantile`). Default: `none`.
* __secondVariable__ | `string`: seconda variabile per la statistica di correlazione. Default: `none`.
* __omit__ | `boolean`: controlla se omettere i valori mancanti. Default: `false`.
* __group__ | `array<(string|Factor)>`: nome della/e variabile/i di raggruppamento. Default: `none`.
* __quantiles__ | `array`: array di quantili da calcolare per la statistica `Quantile. Default: `none`.


## Esempi

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
