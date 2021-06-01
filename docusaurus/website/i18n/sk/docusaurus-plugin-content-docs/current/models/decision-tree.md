---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regresné a klasifikačné stromy.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná premenná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __type__ | `string (required)`: `Klasifikácia` pre kategorické alebo `Regresia` pre kvantitatívne výsledky. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __impurityMeasure__ | `string`: miera nečistoty (`gini` alebo `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: prahová hodnota pre rozdelenie. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maximálna hĺbka stromu. Default: `5`.
* __minItemsCount__ | `number`: minimálny počet pozorovaní v listových uzloch. Default: `50`.
* __onPredict__ | `function`: spätné volanie vyvolané s objektom modelu pri kliknutí na tlačidlo predikcie. Default: `none`.


## Príklady

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

