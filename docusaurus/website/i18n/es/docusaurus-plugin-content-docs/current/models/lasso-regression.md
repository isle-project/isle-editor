---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regresión de LASSO.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `string (required)`: variable de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o más variables de predicción. Default: `none`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos". Default: `none`.
* __lambda__ | `number`: parámetro de regularización. Default: `0.001`.
* __intercept__ | `boolean`: controla si se ajusta a un modelo con un término de intercepción. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `onPredict() {}`.


## Ejemplos

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

