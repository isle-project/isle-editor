---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Estatísticas resumidas.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variables__ | `array<string> (required)`: variável(eis) para a(s) qual(is) calcular estatísticas. Default: `none`.
* __statistics__ | `array<string> (required)`: estatísticas para calcular para as variáveis selecionadas (seja `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, ou `Quantile`). Default: `none`.
* __secondVariable__ | `string`: segunda variável para estatística de correlação. Default: `none`.
* __omit__ | `boolean`: controla se devem ser omitidos os valores em falta. Default: `false`.
* __group__ | `array<(string|Factor)>`: nome da(s) variável(eis) de agrupamento. Default: `none`.
* __quantiles__ | `array`: matriz de quantis a calcular para a estatística "quântica".. Default: `none`.


## Exemplos

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
