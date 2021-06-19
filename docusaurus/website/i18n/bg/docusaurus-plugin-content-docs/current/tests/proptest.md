---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Тест за пропорционалност на една извадка.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `(string|Factor) (required)`: име на променливата. Default: `none`.
* __success__ | `any (required)`: категория за успех на `променлива`. Default: `none`.
* __alpha__ | `number`: ниво на значимост. Default: `0.05`.
* __direction__ | `string`: посока на теста (`less`, `greater` или `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: дял при нулева хипотеза. Default: `0.5`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
