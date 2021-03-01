---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Test delle proporzioni di un campione.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nome della variabile. Default: `none`.
* __success__ | `string (required)`: categoria di successo di "variabile. Default: `none`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: proporzione sotto l'ipotesi nulla. Default: `0.5`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Esempi

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
