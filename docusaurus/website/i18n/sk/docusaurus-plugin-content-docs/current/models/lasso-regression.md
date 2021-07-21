---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regresia.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __y__ | `string (required)`: výsledná premenná. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna alebo viac prediktívnych premenných. Default: `none`.
* __quantitative__ | `array<string> (required)`: pole premenných v `data`, ktoré sú `kvantitatívne`. Default: `none`.
* __lambda__ | `number`: parameter regularizácie. Default: `0.001`.
* __intercept__ | `boolean`: kontroluje, či sa má použiť model s intercepčným členom. Default: `true`.
* __onPredict__ | `function`: spätné volanie vyvolané funkciou predict na vytvorenie predpovedí pre nové údaje. Default: `onPredict() {}`.


## Príklady

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

