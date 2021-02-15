---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Uma trama de mosaico.

## Options

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __variables__ | `array (required)`: conjunto de variáveis a exibir. Default: `none`.
* __showColors__ | `boolean`: controla se as cores devem ser exibidas mostrando significado. Default: `false`.
* __axisLabels__ | `string`: variável de agrupamento. Default: `'parallel to the axis'`.


## Examples

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
