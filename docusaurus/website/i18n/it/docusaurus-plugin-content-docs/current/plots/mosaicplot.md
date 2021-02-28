---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Una trama a mosaico.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __variables__ | `array (required)`: array di variabili da visualizzare. Default: `none`.
* __showColors__ | `boolean`: controlla se visualizzare i colori che mostrano il significato. Default: `false`.
* __axisLabels__ | `string`: posizionamento delle etichette degli assi (sia "parallelo all'asse", "orizzontale", "perpendicolare all'asse" o "verticale"). Default: `'parallel to the axis'`.


## Esempi

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
