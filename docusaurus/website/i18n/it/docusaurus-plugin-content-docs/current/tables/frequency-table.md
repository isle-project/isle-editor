---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Una tabella delle frequenze.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: nome della variabile da visualizzare. Default: `none`.
* __calculateCounts__ | `boolean`: controlla se visualizzare i conteggi assoluti. Default: `true`.
* __calculateRelative__ | `boolean`: controlla se visualizzare le frequenze relative. Default: `false`.
* __group__ | `string`: nome della variabile di raggruppamento. Default: `none`.
* __nDecimalPlaces__ | `number`: numero di cifre decimali per le frequenze relative visualizzate nella tabella. Default: `3`.


## Esempi

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
