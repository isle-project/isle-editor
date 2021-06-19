---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

相关性测试。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __var1__ | `string (required)`: 第一个变量名. Default: `none`.
* __var2__ | `string (required)`: 二号变量名. Default: `none`.
* __rho0__ | `number`: 零假设下的相关值. Default: `0`.
* __alpha__ | `number`: 显著性水平. Default: `0.05`.
* __direction__ | `string`: 测试方向(可选择 `less`, `greater` 或 `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## 例子

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
