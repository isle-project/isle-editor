---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

两个样本平均检验。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __x__ | `string (required)`: 第一个变量名. Default: `none`.
* __y__ | `string`: 第二个变量的名称(必须提供`y`或`group`). Default: `none`.
* __group__ | `(string|Factor)`: 分组变量名称(必须提供`y`或`group`). Default: `none`.
* __type__ | `string`: 试验类型(可以是 "Z试验 "或 "T试验"). Default: `'T Test'`.
* __xstdev__ | `number`: 第一个标准差(对于 "Z测试"). Default: `none`.
* __ystdev__ | `number`: 二次标准差(对于 "Z测试"). Default: `none`.
* __alpha__ | `number`: 显著性水平. Default: `0.05`.
* __direction__ | `string`: 测试方向(可选择 `less`, `greater` 或 `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: 在H0下的差异. Default: `0`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## 例子

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
