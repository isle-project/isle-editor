---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Un componente de aprendizaje en pruebas de hipótesis para un promedio de población.

## Opciones

* __types__ | `array<string>`: el tipo de prueba (una muestra, dos muestras) que el widget debe exponer. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: la(s) prueba(s) expuesta(s) por el widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: mostrar siempre la hipótesis nula como un único valor. Default: `false`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `false`.
* __pValue__ | `string`: etiqueta personalizada para el valor p (debe ser una cadena de ecuaciones LaTeX). Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

```jsx live
<LearnMeanTest />
```

