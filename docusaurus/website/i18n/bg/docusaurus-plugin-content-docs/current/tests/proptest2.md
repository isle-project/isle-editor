---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Тест за пропорционалност на две извадки.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __var1__ | `(string|Factor) (required)`: име на първата променлива. Default: `none`.
* __success__ | `any (required)`: категория на успеха на `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: име на втората променлива (трябва да се въведе `var2` или `group`). Default: `none`.
* __group__ | `(string|Factor)`: име на променливата за групиране (трябва да се въведе `var2` или `group`). Default: `none`.
* __alpha__ | `number`: ниво на значимост. Default: `0.05`.
* __direction__ | `string`: посока на теста (`less`, `greater` или `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: разлика при H0. Default: `0`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
