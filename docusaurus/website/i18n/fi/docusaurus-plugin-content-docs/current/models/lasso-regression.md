---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO-regressio.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __y__ | `string (required)`: tulosmuuttuja. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: yksi tai useampi ennustemuuttuja. Default: `none`.
* __quantitative__ | `array<string> (required)`: joukko `data`:n muuttujia, jotka ovat `kvantitatiivisia`.. Default: `none`.
* __lambda__ | `number`: regularisointiparametri. Default: `0.001`.
* __intercept__ | `boolean`: valvoo, sovitetaanko malli, jossa on leikkaustermi.. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Esimerkkejä

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

