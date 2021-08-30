---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Kokkuvõtlik statistika.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array<string> (required)`: muutuja(d), mille kohta statistikat arvutatakse. Default: `none`.
* __statistics__ | `array<string> (required)`: valitud muutujate jaoks arvutatav(ad) statistika(d) (kas `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, või `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: teine muutuja korrelatsioonistatistika jaoks. Default: `none`.
* __omit__ | `boolean`: kontrollib, kas puuduvad väärtused jäetakse välja. Default: `false`.
* __group__ | `array<(string|Factor)>`: rühmitava(te) muutuja(te) nimi. Default: `none`.
* __quantiles__ | `array`: kvantiliidide massiivi, mis arvutatakse "Kvantili"-statistiku jaoks.. Default: `none`.


## Näited

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
