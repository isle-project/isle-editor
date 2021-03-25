---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Un componente de aprendizaje que ilustra el Teorema del Límite Central (CLT) para una distribución continua elegida.

## Opciones

* __distributions__ | `array<string>`: distribuciones estadísticas a elegir ('uniforme', 'exponencial', y/o 'normal'). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: matriz de números o un solo número que denota los tamaños de muestra que se pueden extraer. Default: `25`.
* __hideFormulas__ | `boolean`: controla si se ocultan las fórmulas en el texto del componente. Default: `false`.


## Ejemplos

```jsx live
<LearnContinuousCLT />
```

