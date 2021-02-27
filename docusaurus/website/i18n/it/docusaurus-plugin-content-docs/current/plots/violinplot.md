---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Una trama per violino.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `(string|Factor)`: variabile di raggruppamento. Default: `none`.
* __showBox__ | `boolean`: controlla se visualizzare un grafico a scatola all'interno. Default: `false`.


## Esempi

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

