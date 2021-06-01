---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO-regression.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __y__ | `string (required)`: utfallsvariabel.. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flera prediktionsvariabler. Default: `none`.
* __quantitative__ | `array<string> (required)`: en matris med variabler i "data" som är "kvantitativa".. Default: `none`.
* __lambda__ | `number`: regleringsparameter.. Default: `0.001`.
* __intercept__ | `boolean`: kontrollerar om en modell ska anpassas med en interceptterm. Default: `true`.
* __onPredict__ | `function`: callback som anropas med förutsägelser och residualer efter modellanpassning.. Default: `onPredict() {}`.


## Exempel

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

