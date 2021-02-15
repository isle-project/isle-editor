---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Test di correlazione.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __var1__ | `string (required)`: nome della prima variabile. Default: `none`.
* __var2__ | `string (required)`: nome della seconda variabile. Default: `none`.
* __rho0__ | `number`: valore di correlazione sotto l'ipotesi nulla. Default: `0`.
* __alpha__ | `number`: livello di significatività. Default: `0.05`.
* __direction__ | `string`: direzione di prova (sia `less`, `greater`, o `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significatività specificato. Default: `false`.


## Examples

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
