---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Jednovýberový test priemernej hodnoty.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `string (required)`: názov premennej. Default: `none`.
* __type__ | `string`: typ testu (`Z Test` alebo `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: štandardná odchýlka (pre `Z test`). Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: smer testu (buď `menej`, `viac` alebo `obojstranne`). Default: `'two-sided'`.
* __mu0__ | `number`: priemer pri nulovej hypotéze. Default: `0`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
