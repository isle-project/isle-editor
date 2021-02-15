---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Test delle proporzioni a due campioni.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __var1__ | `string (required)`: nome della prima variabile. Default: `none`.
* __success__ | `string (required)`: categoria di successo di `var1. Default: `none`.
* __var2__ | `string`: nome della seconda variabile (deve essere fornito "var2" o "gruppo"). Default: `none`.
* __group__ | `string`: nome della variabile di raggruppamento (deve essere fornito "var2" o "gruppo"). Default: `none`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: differenza sotto H0. Default: `0`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Examples

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
