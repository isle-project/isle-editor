---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analisi della varianza.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: nome della variabile da visualizzare. Default: `none`.
* __group__ | `string`: nome della variabile di raggruppamento. Default: `none`.
* __showDecision__ | `boolean`: controlla se visualizzare la decisione del test. Default: `false`.


## Esempi

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
