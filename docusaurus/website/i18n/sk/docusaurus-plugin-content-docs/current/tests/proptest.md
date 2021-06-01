---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Jednovýberový proporčný test.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: názov premennej. Default: `none`.
* __success__ | `any (required)`: kategória úspešnosti `premenná`. Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: smer testu (buď `menej`, `viac` alebo `obojstranne`). Default: `'two-sided'`.
* __p0__ | `number`: podiel pri nulovej hypotéze. Default: `0.5`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
