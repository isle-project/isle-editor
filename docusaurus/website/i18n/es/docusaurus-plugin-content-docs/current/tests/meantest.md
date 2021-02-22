---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Una prueba de media de una muestra.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: nombre de la variable. Default: `none`.
* __type__ | `string`: tipo de prueba (`Z Test` o `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: desviación estándar (para la "Prueba Z"). Default: `none`.
* __alpha__ | `number`: nivel de importancia. Default: `0.05`.
* __direction__ | `string`: dirección de prueba (ya sea "menos", "más grande" o "de dos lados"). Default: `'two-sided'`.
* __mu0__ | `number`: media bajo la hipótesis nula. Default: `0`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
