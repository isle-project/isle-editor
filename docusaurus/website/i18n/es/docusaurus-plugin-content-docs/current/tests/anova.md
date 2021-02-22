---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Análisis de la varianza.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: nombre de la variable a mostrar. Default: `none`.
* __group__ | `string`: nombre de la variable de agrupación. Default: `none`.
* __showDecision__ | `boolean`: controla si se muestra la decisión de la prueba. Default: `false`.


## Ejemplos

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
