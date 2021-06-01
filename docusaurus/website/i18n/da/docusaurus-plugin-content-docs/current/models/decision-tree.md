---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regressions- og klassifikationstræer.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: udfaldsvariabel. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __type__ | `string (required)`: `Klassifikation` for kategoriske eller `Regression` for kvantitative resultater. Default: `none`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __impurityMeasure__ | `string`: urenhedsmåling (`gini` eller `entropi`). Default: `'gini'`.
* __scoreThreshold__ | `number`: scoretærskel for opdeling. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maksimal trædybde. Default: `5`.
* __minItemsCount__ | `number`: mindste antal observationer i bladknuder. Default: `50`.
* __onPredict__ | `function`: callback, der påkaldes med modelobjektet, når der klikkes på forudsigelsesknappen. Default: `none`.


## Eksempler

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

