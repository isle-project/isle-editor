---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Dvouvýběrový proporční test.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __var1__ | `(string|Factor) (required)`: název první proměnné. Default: `none`.
* __success__ | `any (required)`: kategorie úspěšnosti `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: název druhé proměnné (je třeba zadat `var2` nebo `group`). Default: `none`.
* __group__ | `(string|Factor)`: název seskupující proměnné (je třeba zadat `var2` nebo `group`).. Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: směr testu (buď `menší`, `větší`, nebo `oboustranný`).. Default: `'two-sided'`.
* __diff__ | `number`: rozdíl podle H0. Default: `0`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
