---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Regresión lineal múltiple.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `(string|Factor) (required)`: variable de resultado. Default: `none`.
* __success__ | `any (required)`: categoría de éxito de "y. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o más variables de predicción. Default: `none`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos".. Default: `none`.
* __omitMissing__ | `boolean`: controla si se omiten los valores que faltan. Default: `false`.
* __intercept__ | `boolean`: controla si se ajusta a un modelo con un término de intercepción. Default: `true`.
* __onPredict__ | `function`: llamada de retorno invocada con predicciones y residuos después del ajuste del modelo. Default: `none`.


## Ejemplos

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

