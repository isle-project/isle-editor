---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Véletlen erdők.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __y__ | `(string|Factor) (required)`: eredményváltozó. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: egy vagy több előrejelző változó. Default: `none`.
* __type__ | `string`: jelenleg csak a kategorikus válaszok "osztályozása" támogatott.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: az "adatok" változóinak tömbje, amelyek "mennyiségi" változók. Default: `none`.
* __nTrees__ | `number`: fák száma. Default: `50`.
* __nTry__ | `number`: az egyes osztásoknál ellenőrizendő prediktorok száma. Default: `1`.
* __impurityMeasure__ | `string`: a szennyeződés mértékegysége (`gini` vagy `entrópia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: ponthatár a felosztáshoz. Default: `0.01`.
* __maxTreeDepth__ | `number`: a fa maximális mélysége. Default: `20`.
* __minItemsCount__ | `number`: a levélcsomópontokban lévő megfigyelések minimális száma. Default: `50`.
* __onPredict__ | `function`: callback, amelyet a modell objektummal hívnak elő, amikor a prediktáló gombra kattintanak.. Default: `none`.


## Példák

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

