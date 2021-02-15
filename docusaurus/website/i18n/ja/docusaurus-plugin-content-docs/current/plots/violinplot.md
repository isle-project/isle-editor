---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

バイオリンのプロット。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __showBox__ | `boolean`: の中にボックスプロットを表示するかどうかを制御します。. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

