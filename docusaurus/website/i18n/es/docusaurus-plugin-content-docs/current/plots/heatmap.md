---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Un mapa de calor para visualizar una relación entre dos variables.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __x__ | `string (required)`: variable del eje x. Default: `none`.
* __y__ | `string (required)`: variable del eje y. Default: `none`.
* __overlayPoints__ | `boolean`: controla si se superponen puntos para cada observación. Default: `false`.
* __smoothSpan__ | `number`: el intervalo de suavizado. Default: `0.66`.
* __regressionMethod__ | `array<string>`: que contiene "lineal" y/o "suave" para superponer una línea de regresión lineal y/o suave.. Default: `none`.
* __alternateColor__ | `boolean`: controla si se utiliza un esquema de color alternativo para el mapa de calor. Default: `false`.
* __commonXAxis__ | `boolean`: controla si se utiliza un eje x común al crear múltiples mapas de calor por valor de una variable de agrupación. Default: `false`.
* __commonYAxis__ | `boolean`: controla si se utiliza un eje Y común al crear múltiples mapas de calor por valor de una variable de agrupación. Default: `false`.


## Ejemplos

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

