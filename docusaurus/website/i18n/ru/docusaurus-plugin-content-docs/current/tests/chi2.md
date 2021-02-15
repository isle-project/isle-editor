---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Тест на независимость хи-квадрат.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __var1__ | `string (required)`: имя первой переменной. Default: `none`.
* __var2__ | `string (required)`: имя второй переменной. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
