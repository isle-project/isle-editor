---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regrese.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `string (required)`: výsledná proměnná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __lambda__ | `number`: parametr regularizace. Default: `0.001`.
* __intercept__ | `boolean`: řídí, zda se má model přizpůsobit intercepčnímu členu.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Příklady

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

