---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

ガンマ分布の確率を計算するための学習コンポーネント。

## オプション

* __domain__ | `object`: オブジェクトであり、それぞれの軸の始点と終点を持つ `x` と `y` の配列です。. Default: `none`.
* __scaleParameterization__ | `boolean`: shape と rate の代わりに shape と scale パラメータを含むパラメータ化を使用するかどうかを制御します. Default: `false`.
* __step__ | `(number|string)`: スクロール入力のステップサイズ. Default: `0.01`.
* __symbols__ | `boolean`: パラメータにギリシャ語の記号を表示するかどうか. Default: `true`.
* __tabs__ | `array<string>`: どのタブを表示するか (`smaller`, `greater`, `range` のいずれか). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnGammaDistribution />
```

