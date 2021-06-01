---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Tilfældige skove.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `(string|Factor) (required)`: udfaldsvariabel. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __type__ | `string`: i øjeblikket understøttes kun `Classification` for kategoriske svar. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __nTrees__ | `number`: antal træer. Default: `50`.
* __nTry__ | `number`: antal prædiktorer, der skal kontrolleres ved hvert split. Default: `1`.
* __impurityMeasure__ | `string`: urenhedsmåling (`gini` eller `entropi`). Default: `'gini'`.
* __scoreThreshold__ | `number`: scoretærskel for opdeling. Default: `0.01`.
* __maxTreeDepth__ | `number`: maksimal trædybde. Default: `20`.
* __minItemsCount__ | `number`: mindste antal observationer i bladknuder. Default: `50`.
* __onPredict__ | `function`: callback, der påkaldes med modelobjektet, når der klikkes på forudsigelsesknappen. Default: `none`.


## Eksempler

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

