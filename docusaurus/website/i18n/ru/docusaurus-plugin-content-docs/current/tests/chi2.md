---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Тест на независимость хи-квадрат.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __var1__ | `(string|Factor) (required)`: имя первой переменной. Default: `none`.
* __var2__ | `(string|Factor) (required)`: имя второй переменной. Default: `none`.


## Примеры

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
