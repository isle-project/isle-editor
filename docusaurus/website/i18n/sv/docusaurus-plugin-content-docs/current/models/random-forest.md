---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Slumpmässiga skogar.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `(string|Factor) (required)`: utfallsvariabel.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __type__ | `string`: För närvarande stöds endast `Classification` för kategoriska svar.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __nTrees__ | `number`: antal träd. Default: `50`.
* __nTry__ | `number`: Antal prediktorer som ska kontrolleras vid varje delning.. Default: `1`.
* __impurityMeasure__ | `string`: mått på föroreningar (gini eller entropi).. Default: `'gini'`.
* __scoreThreshold__ | `number`: tröskelvärde för poäng för delning. Default: `0.01`.
* __maxTreeDepth__ | `number`: Maximalt träddjup.. Default: `20`.
* __minItemsCount__ | `number`: Minsta antal observationer i bladnoderna.. Default: `50`.
* __onPredict__ | `function`: callback som åberopas med modellobjektet när man klickar på knappen förutsäga.. Default: `none`.


## Exempel

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

