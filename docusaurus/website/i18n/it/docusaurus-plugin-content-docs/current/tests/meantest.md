---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Test della media di un campione.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: nome della variabile. Default: `none`.
* __type__ | `string`: tipo di test (`Z Test` o `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: deviazione standard (per il "Test Z"). Default: `none`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: media sotto l'ipotesi nulla. Default: `0`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Examples

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
