---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressioon ja klassifikatsioonipuud.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulemusmuutuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __type__ | `string (required)`: "Klassifitseerimine" kategooriliste või "regressioon" kvantitatiivsete tulemuste puhul.. Default: `none`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __impurityMeasure__ | `string`: lisandite mõõt (`gini` või `entroopia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: punktisumma künnis jagamise jaoks. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maksimaalne puu sügavus. Default: `5`.
* __minItemsCount__ | `number`: minimaalne vaatluste arv lehtsõlmedes. Default: `50`.
* __onPredict__ | `function`: callback, mis kutsutakse esile mudeli objektiga, kui vajutatakse nupule predict (ennustada). Default: `none`.


## Näited

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

