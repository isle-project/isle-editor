---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Juhuslikud metsad.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `(string|Factor) (required)`: tulemusmuutuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __type__ | `string`: praegu on toetatud ainult kategooriliste vastuste "klassifitseerimine".. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __nTrees__ | `number`: puude arv. Default: `50`.
* __nTry__ | `number`: iga jaotuse puhul kontrollitavate ennustajate arv. Default: `1`.
* __impurityMeasure__ | `string`: lisandite mõõt (`gini` või `entroopia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: punktisumma künnis jagamise jaoks. Default: `0.01`.
* __maxTreeDepth__ | `number`: maksimaalne puu sügavus. Default: `20`.
* __minItemsCount__ | `number`: minimaalne vaatluste arv lehtsõlmedes. Default: `50`.
* __onPredict__ | `function`: callback, mis kutsutakse esile mudeli objektiga, kui vajutatakse nupule predict (ennustada). Default: `none`.


## Näited

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

