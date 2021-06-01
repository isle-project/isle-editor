---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Náhodné lesy.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná proměnná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __type__ | `string`: v současné době je podporována pouze funkce `Klasifikace` pro kategorické odpovědi.. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __nTrees__ | `number`: počet stromů. Default: `50`.
* __nTry__ | `number`: počet prediktorů ke kontrole při každém rozdělení. Default: `1`.
* __impurityMeasure__ | `string`: míra nečistoty (`gini` nebo `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: bodová hranice pro rozdělení. Default: `0.01`.
* __maxTreeDepth__ | `number`: maximální hloubka stromu. Default: `20`.
* __minItemsCount__ | `number`: minimální počet pozorování v listových uzlech. Default: `50`.
* __onPredict__ | `function`: zpětné volání vyvolané pomocí objektu modelu při kliknutí na tlačítko predict. Default: `none`.


## Příklady

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

