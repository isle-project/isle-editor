---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korelačný test.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __var1__ | `string (required)`: názov prvej premennej. Default: `none`.
* __var2__ | `string (required)`: názov druhej premennej. Default: `none`.
* __rho0__ | `number`: hodnota korelácie pri nulovej hypotéze. Default: `0`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: smer testu (buď `less`, `greater` alebo `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
