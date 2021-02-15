---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

配列の最小値と最大値を計算します。

## Options

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __xval__ | `string (required)`: X軸に表示するための変数. Default: `none`.
* __yval__ | `string (required)`: y軸に表示するための変数. Default: `none`.
* __text__ | `string`: 各ポイントの横に表示されるテキスト. Default: `none`.
* __color__ | `string`: 点の色に対応させる範疇変数. Default: `none`.
* __type__ | `string`: 表示されたシンボルにマッピングするカテゴリ変数. Default: `none`.
* __size__ | `string`: 点の大きさに対応する量的変数. Default: `none`.
* __regressionLine__ | `boolean`: 回帰直線をオーバーレイするかどうかを制御する. Default: `false`.
* __regressionMethod__ | `array<string>`: 線形回帰と平滑化されたLOWESS回帰線を表示するための `linear` および/または `smooth`。. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: 指定されたカテゴリ変数のカテゴリごとに個別の回帰線を表示する. Default: `none`.
* __smoothSpan__ | `number`: スムーズ回帰線の平滑化スパンパラメータ. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

