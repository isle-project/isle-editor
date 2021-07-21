---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Multipel linjär regression.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `string (required)`: utfallsvariabel.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __omitMissing__ | `boolean`: kontrollerar om saknade värden ska utelämnas. Default: `false`.
* __intercept__ | `boolean`: kontrollerar om en modell ska anpassas med en interceptterm. Default: `true`.
* __onDiagnostics__ | `function`: callback som anropas med diagnostiska tomter. Default: `none`.
* __onPredict__ | `function`: callback som åberopas med en prediktionsfunktion för att göra förutsägelser för nya data.. Default: `none`.


## Exempel

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

