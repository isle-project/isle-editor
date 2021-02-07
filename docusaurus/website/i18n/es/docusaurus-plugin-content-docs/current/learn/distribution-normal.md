---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Un componente de aprendizaje para calcular las probabilidades de una distribución normal.

## Options

* __domain__ | `object`: objeto de las matrices "x" y "y" con los puntos de inicio y final para el eje respectivo. Default: `none`.
* __hideCDF__ | `boolean`: controla si ocultar las parcelas de la CDF. Default: `false`.
* __minStDev__ | `number`: desviación estándar mínima. Default: `1`.
* __step__ | `(number|string)`: tamaño del paso de la entrada de desplazamiento. Default: `0.01`.
* __tabs__ | `array<string>`: qué pestañas mostrar (ya sea "más pequeño", "más grande" o "rango"). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

