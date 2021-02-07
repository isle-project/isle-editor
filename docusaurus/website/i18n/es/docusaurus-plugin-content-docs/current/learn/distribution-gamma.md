---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Un componente de aprendizaje para calcular las probabilidades de una distribución gamma.

## Options

* __domain__ | `object`: objeto de las matrices "x" y "y" con los puntos de inicio y final para el eje respectivo. Default: `none`.
* __scaleParameterization__ | `boolean`: controla si se utiliza la parametrización que implica un parámetro de forma y escala en lugar de forma y tasa. Default: `false`.
* __step__ | `(number|string)`: tamaño del paso de la entrada de desplazamiento. Default: `0.01`.
* __symbols__ | `boolean`: si mostrar los símbolos griegos para los parámetros. Default: `true`.
* __tabs__ | `array<string>`: qué pestañas mostrar (ya sea "más pequeño", "más grande" o "rango"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<LearnGammaDistribution />
```

