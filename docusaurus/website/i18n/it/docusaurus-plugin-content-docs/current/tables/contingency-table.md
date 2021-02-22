---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Una tabella di contingenza.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __rowVar__ | `string (required)`: nome della variabile di riga. Default: `none`.
* __colVar__ | `string (required)`: nome variabile della colonna. Default: `none`.
* __relativeFreqs__ | `boolean`: controlla se visualizzare le frequenze relative. Default: `false`.
* __group__ | `string`: nome della variabile di raggruppamento. Default: `none`.
* __display__ | `array<string>`: se visualizzare "Percentuale di riga" e/o "Percentuale di colonna".. Default: `[]`.
* __nDecimalPlaces__ | `number`: numero di cifre decimali per le frequenze relative visualizzate nella tabella. Default: `3`.


## Esempi

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
