---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Una tabla de frecuencias.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: nombre de la variable a mostrar. Default: `none`.
* __calculateCounts__ | `boolean`: controla si se muestran los recuentos absolutos. Default: `true`.
* __calculateRelative__ | `boolean`: controla si se muestran las frecuencias relativas. Default: `false`.
* __group__ | `string`: nombre de la variable de agrupación. Default: `none`.
* __nDecimalPlaces__ | `number`: número de decimales para las frecuencias relativas mostradas en la tabla. Default: `3`.


## Ejemplos

## Examples

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
