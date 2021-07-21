---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Jednoduchá lineární regrese.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __x__ | `string (required)`: vysvětlující proměnná. Default: `none`.
* __y__ | `string (required)`: proměnná odpovědi. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __omitMissing__ | `boolean`: řídí, zda se mají při fitování modelu vynechat chybějící hodnoty.. Default: `false`.
* __onDiagnostics__ | `function`: zpětné volání vyvolané s diagnostickými pozemky. Default: `none`.
* __onPredict__ | `function`: zpětné volání vyvolané pomocí funkce predict pro předpovědi nových dat.. Default: `none`.


## Příklady

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

