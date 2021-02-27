---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

应急表；

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __rowVar__ | `string (required)`: 行变量名. Default: `none`.
* __colVar__ | `string (required)`: 列变量名. Default: `none`.
* __relativeFreqs__ | `boolean`: 控制是否显示相对频率. Default: `false`.
* __group__ | `(string|Factor)`: 分组名称. Default: `none`.
* __display__ | `array<string>`: 是否显示 "行百分比 "和/或 "列百分比"。. Default: `[]`.
* __nDecimalPlaces__ | `number`: 表中显示的相对频率的小数点位数. Default: `3`.


## 例子

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
