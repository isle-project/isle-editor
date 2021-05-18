---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Test delle proporzioni a due campioni.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __var1__ | `(string|Factor) (required)`: nome della prima variabile. Default: `none`.
* __success__ | `any (required)`: categoria di successo di `var1. Default: `none`.
* __var2__ | `(string|Factor)`: nome della seconda variabile (deve essere fornito "var2" o "gruppo"). Default: `none`.
* __group__ | `(string|Factor)`: nome della variabile di raggruppamento (deve essere fornito "var2" o "gruppo"). Default: `none`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: differenza sotto H0. Default: `0`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Esempi

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
