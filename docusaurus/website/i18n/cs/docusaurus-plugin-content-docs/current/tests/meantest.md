---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Jednovýběrový test střední hodnoty.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: název proměnné. Default: `none`.
* __type__ | `string`: typ testu (`Z Test` nebo `T Test`).. Default: `'T Test'`.
* __stdev__ | `number`: směrodatná odchylka (pro `Z test`). Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: směr testu (buď `less`, `greater`, nebo `two-sided`).. Default: `'two-sided'`.
* __mu0__ | `number`: průměr při nulové hypotéze. Default: `0`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
