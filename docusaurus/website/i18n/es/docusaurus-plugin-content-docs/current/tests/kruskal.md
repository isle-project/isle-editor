---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Prueba de Kruskal-Wallis.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: nombre de la variable. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
