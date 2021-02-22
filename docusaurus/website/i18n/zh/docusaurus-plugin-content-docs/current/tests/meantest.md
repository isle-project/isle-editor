---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

单一样本平均检验。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量名. Default: `none`.
* __type__ | `string`: 试验类型(`Z试验`或`T试验`). Default: `'T Test'`.
* __stdev__ | `number`: 标准差(对 "Z测试 "而言). Default: `none`.
* __alpha__ | `number`: 显著性水平. Default: `0.05`.
* __direction__ | `string`: 测试方向(可选择 "少"、"大 "或 "双面"). Default: `'two-sided'`.
* __mu0__ | `number`: 零假设下的平均值. Default: `0`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## 例子

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
