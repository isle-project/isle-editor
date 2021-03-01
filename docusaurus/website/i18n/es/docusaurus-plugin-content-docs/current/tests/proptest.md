---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Prueba de proporción de una muestra.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nombre de la variable. Default: `none`.
* __success__ | `string (required)`: categoría de éxito de "variable. Default: `none`.
* __alpha__ | `number`: nivel de importancia. Default: `0.05`.
* __direction__ | `string`: dirección de prueba (ya sea "menos", "más grande" o "de dos lados"). Default: `'two-sided'`.
* __p0__ | `number`: proporción bajo la hipótesis nula. Default: `0.5`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
