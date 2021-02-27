---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

一个频率表；

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variable__ | `string (required)`: 显示的变量名称. Default: `none`.
* __calculateCounts__ | `boolean`: 控制是否显示绝对数. Default: `true`.
* __calculateRelative__ | `boolean`: 控制是否显示相对频率. Default: `false`.
* __group__ | `(string|Factor)`: 分组名称. Default: `none`.
* __nDecimalPlaces__ | `number`: 表中显示的相对频率的小数点位数. Default: `3`.


## 例子

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
