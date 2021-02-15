---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Una trama a scatola.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `(array|string) (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `array`: una o due variabili di raggruppamento. Default: `[]`.
* __orientation__ | `string`: orientamento "verticale" o "orizzontale".. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controlla se sovrapporre i punti. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

