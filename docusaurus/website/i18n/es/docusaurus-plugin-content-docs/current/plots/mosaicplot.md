---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Una trama de mosaicos.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __variables__ | `array (required)`: una serie de variables para mostrar. Default: `none`.
* __showColors__ | `boolean`: controla si se muestran los colores que muestran el significado. Default: `false`.
* __axisLabels__ | `string`: posicionamiento de las etiquetas de los ejes (ya sea, `paralelo al eje`, `horizontal`, `perpendicular al eje`, o `vertical`). Default: `'parallel to the axis'`.


## Ejemplos

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
