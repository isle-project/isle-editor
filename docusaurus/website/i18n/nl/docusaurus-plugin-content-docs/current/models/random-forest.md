---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Regressie- en classificatiebomen.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __x__ | `(array<string>|string) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __type__ | `string`: op dit moment wordt alleen `Classificatie` voor categorische antwoorden ondersteund. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __nTrees__ | `number`: aantal bomen. Default: `50`.
* __nTry__ | `number`: aantal te controleren voorspellers bij elke splitsing. Default: `1`.
* __impurityMeasure__ | `string`: onzuiverheidsmaatregel (`gini` of `entropie`). Default: `'gini'`.
* __scoreThreshold__ | `number`: scoringsdrempel voor splitsing. Default: `0.01`.
* __maxTreeDepth__ | `number`: maximale boomdiepte. Default: `20`.
* __minItemsCount__ | `number`: minimum # van de waarnemingen in bladknopen. Default: `50`.
* __onPredict__ | `function`: callback aangeroepen met modelobject bij het klikken op de voorspellingsknop. Default: `none`.


## Examples

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

