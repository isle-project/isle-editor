---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regresija.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `string (required)`: rezultato kintamasis. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __lambda__ | `number`: reguliavimo parametras. Default: `0.001`.
* __intercept__ | `boolean`: kontroliuoja, ar taikyti modelį su intercepcijos nariu.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Pavyzdžiai

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

