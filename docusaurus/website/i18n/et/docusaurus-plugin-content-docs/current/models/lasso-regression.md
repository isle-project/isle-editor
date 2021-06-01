---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regressioon.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __y__ | `string (required)`: tulemusmuutuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: üks või mitu ennustavat muutujat. Default: `none`.
* __quantitative__ | `array<string> (required)`: muutujate massiivi "andmed", mis on "kvantitatiivsed".. Default: `none`.
* __lambda__ | `number`: normaliseerimise parameeter. Default: `0.001`.
* __intercept__ | `boolean`: kontrollib, kas mudelile sobitada intertseptiterminiga.. Default: `true`.
* __onPredict__ | `function`: callback, mida kutsutakse üles koos prognooside ja jääkidega pärast mudeli sobitamist. Default: `onPredict() {}`.


## Näited

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

