---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

两个样本比例检验。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __var1__ | `string (required)`: 第一个变量名. Default: `none`.
* __success__ | `string (required)`: `var1`的成功类别. Default: `none`.
* __var2__ | `string`: 第二个变量的名称(必须提供`var2`或`group`). Default: `none`.
* __group__ | `string`: 分组变量的名称(必须提供`var2`或`group`). Default: `none`.
* __alpha__ | `number`: 显著性水平. Default: `0.05`.
* __direction__ | `string`: 测试方向(可选择 "少"、"大 "或 "双面"). Default: `'two-sided'`.
* __diff__ | `number`: 在H0下的差异. Default: `0`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## 例子

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
