---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Összefoglaló statisztikák.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variables__ | `array<string> (required)`: változó(k), amelyre vonatkozóan statisztikákat kell kiszámítani. Default: `none`.
* __statistics__ | `array<string> (required)`: a kiválasztott változókra kiszámítandó statisztika(k) (vagy `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, vagy `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: a korrelációs statisztika második változója. Default: `none`.
* __omit__ | `boolean`: szabályozza, hogy a hiányzó értékek elhagyhatók-e. Default: `false`.
* __group__ | `array<(string|Factor)>`: a csoportosító változó(k) neve. Default: `none`.
* __quantiles__ | `array`: a kvantilisek tömbje a `Quantile` statisztika kiszámításához. Default: `none`.


## Példák

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
