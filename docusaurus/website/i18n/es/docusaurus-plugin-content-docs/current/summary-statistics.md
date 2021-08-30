---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Estadísticas resumidas.

## Opciones

* __data__ | `object (required)`: objeto de arrays de valores. Default: `none`.
* __variables__ | `array<string> (required)`: variable(s) para la(s) cual(es) se calculan las estadísticas. Default: `none`.
* __statistics__ | `array<string> (required)`: estadística(s) a calcular para las variables seleccionadas (ya sea `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, o `Quantile`). Default: `none`.
* __secondVariable__ | `string`: segunda variable para la estadística de correlación. Default: `none`.
* __omit__ | `boolean`: controla si se omiten los valores perdidos. Default: `false`.
* __group__ | `array<(string|Factor)>`: nombre de la(s) variable(s) de agrupación. Default: `none`.
* __quantiles__ | `array`: matriz de cuantiles a calcular para la estadística `Quantile`.. Default: `none`.


## Ejemplos

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
