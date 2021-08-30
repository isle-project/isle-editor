---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Сводная статистика.

## Варианты

* __data__ | `object (required)`: объект массивов значений. Default: `none`.
* __variables__ | `array<string> (required)`: переменная(ые), для которой(ых) необходимо рассчитать статистику. Default: `none`.
* __statistics__ | `array<string> (required)`: статистика(и) для расчета выбранных переменных (либо `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, или `Quantile`). Default: `none`.
* __secondVariable__ | `string`: вторая переменная для статистики корреляции. Default: `none`.
* __omit__ | `boolean`: контролирует, следует ли опускать отсутствующие значения. Default: `false`.
* __group__ | `array<(string|Factor)>`: название группирующей переменной (переменных). Default: `none`.
* __quantiles__ | `array`: массив квантилей для расчета статистики `Квантиль`. Default: `none`.


## Примеры

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
