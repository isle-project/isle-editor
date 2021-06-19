---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Тест за средна стойност на една извадка.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: име на променливата. Default: `none`.
* __type__ | `string`: вид на теста (`Z Test` или `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: стандартно отклонение (за `Z тест`). Default: `none`.
* __alpha__ | `number`: ниво на значимост. Default: `0.05`.
* __direction__ | `string`: посока на теста (`less`, `greater` или `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: средна стойност при нулева хипотеза. Default: `0`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
