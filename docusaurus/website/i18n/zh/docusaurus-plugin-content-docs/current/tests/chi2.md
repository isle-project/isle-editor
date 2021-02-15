---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Chi-square独立性检验。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __var1__ | `string (required)`: 第一个变量名. Default: `none`.
* __var2__ | `string (required)`: 二号变量名. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
