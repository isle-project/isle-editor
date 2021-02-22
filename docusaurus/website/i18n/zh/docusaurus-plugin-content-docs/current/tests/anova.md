---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

差异分析。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 显示的变量名称. Default: `none`.
* __group__ | `string`: 分组名称. Default: `none`.
* __showDecision__ | `boolean`: 控制是否显示测试决定. Default: `false`.


## 例子

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
