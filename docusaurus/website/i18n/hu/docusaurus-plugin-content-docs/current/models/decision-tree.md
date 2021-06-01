---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressziós és osztályozási fák.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `(string|Factor) (required)`: eredményváltozó. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __type__ | `string (required)`: `Classification` kategorikus vagy `Regresszió` kvantitatív eredmények esetén. Default: `none`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __impurityMeasure__ | `string`: a szennyeződés mértékegysége (`gini` vagy `entrópia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: ponthatár a felosztáshoz. Default: `0.0075`.
* __maxTreeDepth__ | `number`: a fa maximális mélysége. Default: `5`.
* __minItemsCount__ | `number`: a levélcsomópontokban lévő megfigyelések minimális száma. Default: `50`.
* __onPredict__ | `function`: callback, amelyet a modell objektummal hívnak elő, amikor a prediktáló gombra kattintanak.. Default: `none`.


## Példák

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

