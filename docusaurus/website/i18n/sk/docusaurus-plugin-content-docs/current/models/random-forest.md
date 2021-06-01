---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Náhodné lesy.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná premenná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __type__ | `string`: v súčasnosti je podporovaná len `Klasifikácia` pre kategorické odpovede. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __nTrees__ | `number`: počet stromov. Default: `50`.
* __nTry__ | `number`: počet prediktorov na kontrolu pri každom rozdelení. Default: `1`.
* __impurityMeasure__ | `string`: miera nečistoty (`gini` alebo `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: prahová hodnota pre rozdelenie. Default: `0.01`.
* __maxTreeDepth__ | `number`: maximálna hĺbka stromu. Default: `20`.
* __minItemsCount__ | `number`: minimálny počet pozorovaní v listových uzloch. Default: `50`.
* __onPredict__ | `function`: spätné volanie vyvolané s objektom modelu pri kliknutí na tlačidlo predikcie. Default: `none`.


## Príklady

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

