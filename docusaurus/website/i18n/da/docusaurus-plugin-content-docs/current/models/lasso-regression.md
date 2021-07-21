---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO-regression.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __y__ | `string (required)`: udfaldsvariabel. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: en eller flere prædiktorvariable. Default: `none`.
* __quantitative__ | `array<string> (required)`: array af variabler i `data`, der er `kvantitative`.. Default: `none`.
* __lambda__ | `number`: regulariseringsparameter. Default: `0.001`.
* __intercept__ | `boolean`: kontrollerer, om der skal tilpasses en model med et interceptterme. Default: `true`.
* __onPredict__ | `function`: callback, der påkaldes med en forudsigelsesfunktion for at foretage forudsigelser for nye data. Default: `onPredict() {}`.


## Eksempler

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

