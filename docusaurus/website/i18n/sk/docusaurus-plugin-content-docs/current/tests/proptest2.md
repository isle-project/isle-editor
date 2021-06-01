---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Dvojvýberový proporčný test.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __var1__ | `(string|Factor) (required)`: názov prvej premennej. Default: `none`.
* __success__ | `any (required)`: kategória úspešnosti `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: názov druhej premennej (je potrebné uviesť `var2` alebo `group`). Default: `none`.
* __group__ | `(string|Factor)`: názov zoskupujúcej premennej (je potrebné uviesť `var2` alebo `group`). Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: smer testu (buď `menej`, `viac` alebo `obojstranne`). Default: `'two-sided'`.
* __diff__ | `number`: rozdiel podľa H0. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
