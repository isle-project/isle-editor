---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-square独立性检验。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __var1__ | `(string|Factor) (required)`: 第一个变量名. Default: `none`.
* __var2__ | `(string|Factor) (required)`: 二号变量名. Default: `none`.


## 例子

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
