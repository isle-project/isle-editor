---
id: lineplot
title: Line Plot
sidebar_label: Line Plot
---

線分プロット。

## Options

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __x__ | `string`: Ｘ軸変数. Default: `none`.
* __y__ | `string (required)`: Ｙ軸変数. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __showPoints__ | `boolean`: 各観測点をオーバーレイするかどうかを制御します。. Default: `false`.


## Examples

```jsx live
<LinePlot 
    data={heartdisease} 
    x="Cost"
    y="Drugs"
/>
```

