---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

箱のプロット。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `(array|string) (required)`: 表示用変数. Default: `none`.
* __group__ | `array`: グループ化変数. Default: `[]`.
* __orientation__ | `string`: 垂直または水平方向. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: ポイントをオーバーレイするかどうかを制御します。. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

