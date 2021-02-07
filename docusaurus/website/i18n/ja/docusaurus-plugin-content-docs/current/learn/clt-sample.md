---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

与えられたデータセットからサンプリングするときの中心極限定理（CLT）を説明する学習コンポーネント。

## Options

* __data__ | `object (required)`: キーを持つデータオブジェクトは、変数名とそれぞれの変数の値を保持する値に対応しています。. Default: `none`.
* __hidePopulationStdev__ | `boolean`: 母集団標準偏差の非表示. Default: `false`.
* __samples__ | `(array<number>|number)`: 描画可能なサンプルサイズを示す数値または単数の配列. Default: `25`.
* __populationProbabilities__ | `boolean`: 母集団確率の計算式を表示するかどうか. Default: `false`.
* __quantiles__ | `boolean`: 定量値の計算ツールを表示するかどうか. Default: `false`.
* __variables__ | `array (required)`: サンプリング可能な変数名. Default: `none`.


## Examples

```jsx live
<LearnSampleCLT />
```

