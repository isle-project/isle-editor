---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistická regrese.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __y__ | `(string|Factor) (required)`: výsledná proměnná. Default: `none`.
* __success__ | `any (required)`: kategorie úspěšnosti `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna nebo více prediktivních proměnných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole proměnných v `data`, které jsou `kvantitativní`.. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, zda se mají vynechat chybějící hodnoty.. Default: `false`.
* __intercept__ | `boolean`: řídí, zda se má model přizpůsobit intercepčnímu členu.. Default: `true`.
* __onPredict__ | `function`: zpětné volání vyvolané pomocí funkce predict pro předpovědi nových dat.. Default: `none`.


## Příklady

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

