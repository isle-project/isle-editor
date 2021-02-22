---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Test della media a due campioni.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __x__ | `string (required)`: nome della prima variabile. Default: `none`.
* __y__ | `string`: nome della seconda variabile (deve essere fornito "y" o "gruppo"). Default: `none`.
* __group__ | `string`: nome della variabile di raggruppamento (deve essere fornito "y" o "gruppo"). Default: `none`.
* __type__ | `string`: tipo di test (sia `Z Test` o `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: prima deviazione standard (per il `Z Test`). Default: `none`.
* __ystdev__ | `number`: seconda deviazione standard (per il `Z Test`). Default: `none`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: differenza sotto H0. Default: `0`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Esempi

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
