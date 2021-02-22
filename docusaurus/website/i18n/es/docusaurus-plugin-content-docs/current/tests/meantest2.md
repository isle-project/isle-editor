---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Prueba de media de dos muestras.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __x__ | `string (required)`: nombre de la primera variable. Default: `none`.
* __y__ | `string`: nombre de la segunda variable (se debe suministrar "y" o "grupo"). Default: `none`.
* __group__ | `string`: nombre de la variable de agrupación (se debe suministrar "y" o "grupo"). Default: `none`.
* __type__ | `string`: tipo de prueba (ya sea "Prueba Z" o "Prueba T"). Default: `'T Test'`.
* __xstdev__ | `number`: primera desviación estándar (para la "Prueba Z"). Default: `none`.
* __ystdev__ | `number`: segunda desviación estándar (para la "Prueba Z"). Default: `none`.
* __alpha__ | `number`: nivel de importancia. Default: `0.05`.
* __direction__ | `string`: dirección de prueba (ya sea "menos", "más grande" o "de dos lados"). Default: `'two-sided'`.
* __diff__ | `number`: diferencia bajo H0. Default: `0`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
