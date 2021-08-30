---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Povzetek statističnih podatkov.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variables__ | `array<string> (required)`: spremenljivka(-e), za katero(-e) se izračunajo statistični podatki.. Default: `none`.
* __statistics__ | `array<string> (required)`: statistika(-e), ki jo(-e) izračunate za izbrane spremenljivke (bodisi `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, ali `Quantile`). Default: `none`.
* __secondVariable__ | `string`: druga spremenljivka za korelacijsko statistiko. Default: `none`.
* __omit__ | `boolean`: nadzoruje, ali se manjkajoče vrednosti izpustijo.. Default: `false`.
* __group__ | `array<(string|Factor)>`: ime spremenljivke(-k) za razvrščanje v skupine. Default: `none`.
* __quantiles__ | `array`: polje kvantilov za izračun statistike `Quantile`. Default: `none`.


## Primeri

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
