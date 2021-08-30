---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Apibendrinti statistiniai duomenys.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variables__ | `array<string> (required)`: kintamasis (-ieji), kurio (-ių) statistinius duomenis reikia apskaičiuoti.. Default: `none`.
* __statistics__ | `array<string> (required)`: statistiniai duomenys, kuriuos reikia apskaičiuoti pasirinktiems kintamiesiems (arba `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, arba `Quantile`).. Default: `none`.
* __secondVariable__ | `string`: antrasis koreliacijos statistikos kintamasis. Default: `none`.
* __omit__ | `boolean`: kontroliuoja, ar praleisti trūkstamas reikšmes.. Default: `false`.
* __group__ | `array<(string|Factor)>`: grupavimo kintamojo (-ių) pavadinimas. Default: `none`.
* __quantiles__ | `array`: `Kvantilių` statistikos skaičiavimui skirtų kvantilių masyvas. Default: `none`.


## Pavyzdžiai

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
