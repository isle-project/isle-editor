---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Vícenásobná lineární regrese.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `string (required)`: výsledná proměnná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, zda se mají vynechat chybějící hodnoty.. Default: `false`.
* __intercept__ | `boolean`: řídí, zda se má model přizpůsobit intercepčnímu členu.. Default: `true`.
* __onDiagnostics__ | `function`: zpětné volání vyvolané s diagnostickými pozemky. Default: `none`.
* __onPredict__ | `function`: zpětné volání vyvolané pomocí funkce predict pro předpovědi nových dat.. Default: `none`.


## Příklady

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

