---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Una tabla de contingencia.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __rowVar__ | `string (required)`: nombre de la variable de la fila. Default: `none`.
* __colVar__ | `string (required)`: nombre de la variable de la columna. Default: `none`.
* __relativeFreqs__ | `boolean`: controla si se muestran las frecuencias relativas. Default: `false`.
* __group__ | `string`: nombre de la variable de agrupación. Default: `none`.
* __display__ | `array<string>`: si mostrar "Porcentaje de fila" y/o "Porcentaje de columna. Default: `[]`.
* __nDecimalPlaces__ | `number`: número de decimales para las frecuencias relativas mostradas en la tabla. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
