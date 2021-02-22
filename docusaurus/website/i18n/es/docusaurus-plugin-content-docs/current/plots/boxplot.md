---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Una trama de cajas.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `(array|string) (required)`: variable a mostrar. Default: `none`.
* __group__ | `array`: una o dos variables de agrupación. Default: `[]`.
* __orientation__ | `string`: orientación "vertical" u "horizontal".. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controla si se superponen los puntos. Default: `false`.


## Ejemplos

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

