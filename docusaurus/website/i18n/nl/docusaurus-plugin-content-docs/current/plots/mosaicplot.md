---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Een mozaïekplot.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __variables__ | `array (required)`: reeks weer te geven variabelen. Default: `none`.
* __showColors__ | `boolean`: bepaalt of kleuren met betekenis moeten worden weergegeven. Default: `false`.
* __axisLabels__ | `string`: positionering van aslabels (ofwel, `parallel aan de as`, `horizontaal`, ` loodrecht op de as`, of `verticaal`). Default: `'parallel to the axis'`.


## Voorbeelden

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
