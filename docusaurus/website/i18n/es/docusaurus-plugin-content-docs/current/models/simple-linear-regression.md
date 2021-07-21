---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Regresión lineal simple.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __x__ | `string (required)`: variable explicativa. Default: `none`.
* __y__ | `string (required)`: variable de respuesta. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __omitMissing__ | `boolean`: controla si se omiten los valores que faltan en el ajuste del modelo. Default: `false`.
* __onDiagnostics__ | `function`: llamada de vuelta invocada con gráficos de diagnóstico. Default: `none`.
* __onPredict__ | `function`: llamada de retorno invocada con una función de predicción para hacer predicciones para los nuevos datos. Default: `none`.


## Ejemplos

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

