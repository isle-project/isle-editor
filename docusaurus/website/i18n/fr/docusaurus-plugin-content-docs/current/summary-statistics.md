---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Résumé des statistiques.

## Options

* __data__ | `object (required)`: objet de tableaux de valeurs. Default: `none`.
* __variables__ | `array<string> (required)`: variable(s) pour laquelle/lesquelles calculer les statistiques. Default: `none`.
* __statistics__ | `array<string> (required)`: la ou les statistiques à calculer pour les variables sélectionnées (soit `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, ou `Quantile`). Default: `none`.
* __secondVariable__ | `string`: deuxième variable pour la statistique de corrélation. Default: `none`.
* __omit__ | `boolean`: contrôle si les valeurs manquantes doivent être omises. Default: `false`.
* __group__ | `array<(string|Factor)>`: nom de la ou des variables de regroupement. Default: `none`.
* __quantiles__ | `array`: Tableau des quantiles à calculer pour la statistique `Quantile`.. Default: `none`.


## Exemples

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
