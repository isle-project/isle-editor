---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Dvouvýběrový průměrný test.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __x__ | `string (required)`: název první proměnné. Default: `none`.
* __y__ | `string`: název druhé proměnné (je třeba zadat `y` nebo `group`). Default: `none`.
* __group__ | `(string|Factor)`: název seskupující proměnné (musí být uvedeno `y` nebo `group`).. Default: `none`.
* __type__ | `string`: typ testu (`Z Test` nebo `T Test`).. Default: `'T Test'`.
* __xstdev__ | `number`: první směrodatná odchylka (pro `Z test`). Default: `none`.
* __ystdev__ | `number`: druhá směrodatná odchylka (pro `Z test`). Default: `none`.
* __alpha__ | `number`: úroveň významnosti. Default: `0.05`.
* __direction__ | `string`: směr testu (buď `menší`, `větší`, nebo `oboustranný`).. Default: `'two-sided'`.
* __diff__ | `number`: rozdíl podle H0. Default: `0`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
