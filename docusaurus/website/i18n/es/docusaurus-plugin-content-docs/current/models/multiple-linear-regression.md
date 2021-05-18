---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Regresión lineal múltiple.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `string (required)`: variable de resultado. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o más variables de predicción. Default: `none`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos". Default: `none`.
* __omitMissing__ | `boolean`: controla si se omiten los valores que faltan. Default: `false`.
* __intercept__ | `boolean`: controla si se ajusta a un modelo con un término de intercepción. Default: `true`.
* __onDiagnostics__ | `function`: llamada de vuelta invocada con gráficos de diagnóstico. Default: `none`.
* __onPredict__ | `function`: llamada de retorno invocada con predicciones y residuos después del ajuste del modelo. Default: `none`.


## Ejemplos

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

