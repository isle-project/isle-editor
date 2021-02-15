---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

2つの変数間の関係を可視化するためのヒートマップ。

## Options

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __x__ | `string (required)`: Ｘ軸変数. Default: `none`.
* __y__ | `string (required)`: Ｙ軸変数. Default: `none`.
* __overlayPoints__ | `boolean`: 各オブザベーションのポイントをオーバーレイするかどうかを制御します。. Default: `false`.
* __smoothSpan__ | `number`: スムージングスパン. Default: `0.66`.
* __regressionMethod__ | `array<string>`: 線形および/または平滑化された回帰直線をオーバーレイするための `linear` および/または `smooth` を含む配列．. Default: `none`.
* __alternateColor__ | `boolean`: ヒートマップに別のカラースキームを使用するかどうかを制御します。. Default: `false`.
* __commonXAxis__ | `boolean`: グループ化変数の値ごとに複数のヒートマップを作成する際に、共通のx軸を使用するかどうかを制御します。. Default: `false`.
* __commonYAxis__ | `boolean`: グループ化変数の値ごとに複数のヒートマップを作成する際に、共通のy軸を使用するかどうかを制御します。. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

