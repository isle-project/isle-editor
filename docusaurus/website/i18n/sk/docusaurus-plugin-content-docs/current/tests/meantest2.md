---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Dvojvýberový priemerný test.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __x__ | `string (required)`: názov prvej premennej. Default: `none`.
* __y__ | `string`: názov druhej premennej (je potrebné uviesť `y` alebo `group`). Default: `none`.
* __group__ | `(string|Factor)`: názov zoskupujúcej premennej (je potrebné uviesť `y` alebo `group`). Default: `none`.
* __type__ | `string`: typ testu (buď `Z Test` alebo `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: prvá štandardná odchýlka (pre `Z test`). Default: `none`.
* __ystdev__ | `number`: druhá štandardná odchýlka (pre `Z test`). Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: smer testu (buď `menej`, `viac` alebo `obojstranne`). Default: `'two-sided'`.
* __diff__ | `number`: rozdiel podľa H0. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
