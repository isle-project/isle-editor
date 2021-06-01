---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regresijas un klasifikācijas koki.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `(string|Factor) (required)`: iznākuma mainīgais. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __type__ | `string (required)`: `Klasifikācija` kategoriskiem rezultātiem vai `Regresija` kvantitatīviem rezultātiem.. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __impurityMeasure__ | `string`: piemaisījumu mērs (`gini` vai `entropija`). Default: `'gini'`.
* __scoreThreshold__ | `number`: sadalīšanas slieksnis. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maksimālais koka dziļums. Default: `5`.
* __minItemsCount__ | `number`: minimālais novērojumu skaits lapu mezglos. Default: `50`.
* __onPredict__ | `function`: atsauces izsaukums, kas tiek izsaukts ar modeļa objektu, noklikšķinot uz pogas prognozēt.. Default: `none`.


## Piemēri

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

