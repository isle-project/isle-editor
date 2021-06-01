---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regresní a klasifikační stromy.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná proměnná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __type__ | `string (required)`: `Klasifikace` pro kategoriální nebo `Regrese` pro kvantitativní výsledky. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __impurityMeasure__ | `string`: míra nečistoty (`gini` nebo `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: bodová hranice pro rozdělení. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maximální hloubka stromu. Default: `5`.
* __minItemsCount__ | `number`: minimální počet pozorování v listových uzlech. Default: `50`.
* __onPredict__ | `function`: zpětné volání vyvolané pomocí objektu modelu při kliknutí na tlačítko predict. Default: `none`.


## Příklady

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

