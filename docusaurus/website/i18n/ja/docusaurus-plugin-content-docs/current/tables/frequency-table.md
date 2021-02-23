---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

度数表です。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示対象変数名. Default: `none`.
* __calculateCounts__ | `boolean`: 絶対カウントを表示するかどうかを制御します。. Default: `true`.
* __calculateRelative__ | `boolean`: 相対周波数を表示するかどうかを制御します。. Default: `false`.
* __group__ | `string`: グループ化変数名. Default: `none`.
* __nDecimalPlaces__ | `number`: 表中の相対周波数の小数点以下の桁数. Default: `3`.


## 例としては、以下のようなものがあります。

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
