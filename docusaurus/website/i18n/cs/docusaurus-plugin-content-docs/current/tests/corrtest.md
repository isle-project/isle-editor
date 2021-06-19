---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korelační test.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __var1__ | `string (required)`: název první proměnné. Default: `none`.
* __var2__ | `string (required)`: název druhé proměnné. Default: `none`.
* __rho0__ | `number`: hodnota korelace při nulové hypotéze. Default: `0`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: směr testu (buď `less`, `greater`, nebo `two-sided`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
