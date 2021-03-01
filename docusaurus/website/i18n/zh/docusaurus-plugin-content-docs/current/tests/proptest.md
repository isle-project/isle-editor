---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

单样本比例测试。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 变量名. Default: `none`.
* __success__ | `string (required)`: "变量 "的成功类别. Default: `none`.
* __alpha__ | `number`: 显著性水平. Default: `0.05`.
* __direction__ | `string`: 测试方向(可选择 "少"、"大 "或 "双面"). Default: `'two-sided'`.
* __p0__ | `number`: 零假设下的比例. Default: `0.5`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## 例子

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
