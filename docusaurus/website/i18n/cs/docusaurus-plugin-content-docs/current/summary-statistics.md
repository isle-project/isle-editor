---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Souhrnné statistiky.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variables__ | `array<string> (required)`: proměnné, pro které se počítá statistika.. Default: `none`.
* __statistics__ | `array<string> (required)`: statistika(y), která(é) se vypočítá(í) pro vybrané proměnné (buď `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, nebo `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: druhá proměnná pro korelační statistiku. Default: `none`.
* __omit__ | `boolean`: kontroluje, zda se mají vynechat chybějící hodnoty.. Default: `false`.
* __group__ | `array<(string|Factor)>`: název seskupující proměnné (proměnných). Default: `none`.
* __quantiles__ | `array`: pole kvantilů pro výpočet statistiky `Kvantil`. Default: `none`.


## Příklady

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
