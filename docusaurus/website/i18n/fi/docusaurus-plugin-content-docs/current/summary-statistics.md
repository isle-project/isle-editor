---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Yhteenvetotilastot.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variables__ | `array<string> (required)`: muuttuja(t), jonka (joiden) osalta tilastot lasketaan. Default: `none`.
* __statistics__ | `array<string> (required)`: valituille muuttujille laskettavat tilastot (joko `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, tai `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: toinen muuttuja korrelaatiotilastoa varten. Default: `none`.
* __omit__ | `boolean`: valvoo, jätetäänkö puuttuvat arvot pois. Default: `false`.
* __group__ | `array<(string|Factor)>`: ryhmittelymuuttujan (-muuttujien) nimi. Default: `none`.
* __quantiles__ | `array`: joukko kvanttiileja, jotka lasketaan `Quantile`-tilastolle. Default: `none`.


## Esimerkkejä

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
