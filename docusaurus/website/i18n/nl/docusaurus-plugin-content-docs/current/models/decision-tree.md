---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressie- en classificatiebomen.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __x__ | `(array<string>|string) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __type__ | `string (required)`: Classificatie` voor categorische of `Regressie` voor kwantitatieve resultaten. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __impurityMeasure__ | `string`: onzuiverheidsmaatregel (`gini` of `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: scoringsdrempel voor splitsing. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maximale boomdiepte. Default: `5`.
* __minItemsCount__ | `number`: minimum # van de waarnemingen in bladknopen. Default: `50`.
* __onPredict__ | `function`: callback aangeroepen met modelobject bij het klikken op de voorspellingsknop. Default: `none`.


## Examples

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

