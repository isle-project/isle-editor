---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Jednovýběrový proporční test.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `(string|Factor) (required)`: název proměnné. Default: `none`.
* __success__ | `any (required)`: kategorie úspěchu `proměnná`. Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: směr testu (buď `menší`, `větší`, nebo `oboustranný`).. Default: `'two-sided'`.
* __p0__ | `number`: podíl při nulové hypotéze. Default: `0.5`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
