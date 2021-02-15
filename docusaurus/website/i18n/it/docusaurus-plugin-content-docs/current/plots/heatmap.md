---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Una mappa termica per visualizzare una relazione tra due variabili.

## Options

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __x__ | `string (required)`: variabile dell'asse x. Default: `none`.
* __y__ | `string (required)`: variabile dell'asse y. Default: `none`.
* __overlayPoints__ | `boolean`: controlla se sovrapporre punti per ogni osservazione. Default: `false`.
* __smoothSpan__ | `number`: portata lisciante. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array contenente "lineare" e/o "liscio" per sovrapporre una linea di regressione lineare e/o liscia. Default: `none`.
* __alternateColor__ | `boolean`: controlla se utilizzare uno schema di colori alternativo per la mappa termica. Default: `false`.
* __commonXAxis__ | `boolean`: controlla se utilizzare un asse x comune quando si creano più mappe di calore per valore di una variabile di raggruppamento. Default: `false`.
* __commonYAxis__ | `boolean`: controlla se utilizzare un asse y comune quando si creano più mappe di calore per valore di una variabile di raggruppamento. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

