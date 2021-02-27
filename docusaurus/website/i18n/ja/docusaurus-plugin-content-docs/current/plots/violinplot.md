---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

バイオリンのプロット。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __showBox__ | `boolean`: の中にボックスプロットを表示するかどうかを制御します。. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

