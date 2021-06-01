---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regression och klassificeringsträd.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `(string|Factor) (required)`: utfallsvariabel.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __type__ | `string (required)`: `Klassificering` för kategoriska resultat eller `Regression` för kvantitativa resultat.. Default: `none`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __impurityMeasure__ | `string`: mått på föroreningar (gini eller entropi).. Default: `'gini'`.
* __scoreThreshold__ | `number`: tröskelvärde för poäng för delning. Default: `0.0075`.
* __maxTreeDepth__ | `number`: Maximalt träddjup.. Default: `5`.
* __minItemsCount__ | `number`: Minsta antal observationer i bladnoderna.. Default: `50`.
* __onPredict__ | `function`: callback som åberopas med modellobjektet när man klickar på knappen förutsäga.. Default: `none`.


## Exempel

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

