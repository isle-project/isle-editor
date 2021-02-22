---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

正規分布の確率を計算するための学習コンポーネント。

## オプション

* __domain__ | `object`: オブジェクトであり、それぞれの軸の始点と終点を持つ `x` と `y` の配列です。. Default: `none`.
* __hideCDF__ | `boolean`: CDFプロットを隠すかどうかを制御します。. Default: `false`.
* __minStDev__ | `number`: 最小標準偏差. Default: `1`.
* __step__ | `(number|string)`: スクロール入力のステップサイズ. Default: `0.01`.
* __tabs__ | `array<string>`: どのタブを表示するか (`smaller`, `greater`, `range` のいずれか). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnNormalDistribution />
```

