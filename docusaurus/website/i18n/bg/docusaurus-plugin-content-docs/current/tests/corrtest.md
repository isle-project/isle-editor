---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Тест за корелация.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __var1__ | `string (required)`: име на първата променлива. Default: `none`.
* __var2__ | `string (required)`: име на втората променлива. Default: `none`.
* __rho0__ | `number`: стойност на корелацията при нулева хипотеза. Default: `0`.
* __alpha__ | `number`: ниво на значимост. Default: `0.05`.
* __direction__ | `string`: посока на теста (`малко`, `повече` или `двустранно`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
