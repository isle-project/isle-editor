---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis检验。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 变量名. Default: `none`.
* __group__ | `string`: 分组变量. Default: `none`.
* __showDecision__ | `boolean`: 控制是否显示在指定的显著性水平上拒绝零假设。. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
