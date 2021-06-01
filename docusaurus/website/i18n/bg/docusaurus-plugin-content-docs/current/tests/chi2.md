---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Хи-квадрат тест за независимост.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __var1__ | `(string|Factor) (required)`: име на първата променлива. Default: `none`.
* __var2__ | `(string|Factor) (required)`: име на втората променлива. Default: `none`.


## Примери

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
