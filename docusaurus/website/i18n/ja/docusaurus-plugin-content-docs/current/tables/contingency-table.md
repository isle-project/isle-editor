---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

偶発的な表。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __rowVar__ | `string (required)`: 行変数名. Default: `none`.
* __colVar__ | `string (required)`: 列変数名. Default: `none`.
* __relativeFreqs__ | `boolean`: 相対周波数を表示するかどうかを制御します。. Default: `false`.
* __group__ | `string`: グループ化変数名. Default: `none`.
* __display__ | `array<string>`: 行のパーセント`および/または列のパーセント`を表示するかどうか. Default: `[]`.
* __nDecimalPlaces__ | `number`: 表中の相対周波数の小数点以下の桁数. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
