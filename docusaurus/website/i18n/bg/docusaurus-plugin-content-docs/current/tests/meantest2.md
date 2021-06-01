---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Тест за средна стойност на две извадки.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __x__ | `string (required)`: име на първата променлива. Default: `none`.
* __y__ | `string`: име на втората променлива (трябва да се въведе `y` или `group`). Default: `none`.
* __group__ | `(string|Factor)`: име на променливата за групиране (трябва да се въведе `y` или `group`). Default: `none`.
* __type__ | `string`: вид на теста (или `Z Test`, или `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: първо стандартно отклонение (за `Z тест`). Default: `none`.
* __ystdev__ | `number`: второ стандартно отклонение (за `Z тест`). Default: `none`.
* __alpha__ | `number`: ниво на значимост. Default: `0.05`.
* __direction__ | `string`: посока на теста (`малко`, `повече` или `двустранно`). Default: `'two-sided'`.
* __diff__ | `number`: разлика при H0. Default: `0`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
