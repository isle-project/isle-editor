---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Prueba de correlación.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __var1__ | `string (required)`: nombre de la primera variable. Default: `none`.
* __var2__ | `string (required)`: nombre de la segunda variable. Default: `none`.
* __rho0__ | `number`: valor de correlación bajo la hipótesis nula. Default: `0`.
* __alpha__ | `number`: nivel de importancia. Default: `0.05`.
* __direction__ | `string`: dirección de prueba (ya sea `less`, `greater` o `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
