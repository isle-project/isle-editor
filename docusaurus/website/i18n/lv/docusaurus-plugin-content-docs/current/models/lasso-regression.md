---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regresija.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `string (required)`: iznākuma mainīgais. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __lambda__ | `number`: regulēšanas parametrs. Default: `0.001`.
* __intercept__ | `boolean`: kontrolē, vai piemērot modeli ar intercepcijas locekli.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Piemēri

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

