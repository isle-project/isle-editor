---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Un gráfico de contorno.

## Options

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __x__ | `string (required)`: variable del eje x. Default: `none`.
* __y__ | `string (required)`: variable del eje y. Default: `none`.
* __overlayPoints__ | `boolean`: controla si se superponen puntos para cada observación. Default: `false`.
* __smoothSpan__ | `number`: el intervalo de suavizado. Default: `0.66`.
* __regressionMethod__ | `array<string>`: que contiene "lineal" y/o "suave" para superponer una línea de regresión lineal y/o suave.. Default: `none`.
* __onSelected__ | `function`: llamada de retorno cuando se seleccionan los puntos con los valores x, y y los puntos seleccionados. Default: `onSelected() {}`.


## Examples

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

