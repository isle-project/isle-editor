---
id: confidence-coverage-normal
title: Confidence Interval Coverage Normal
sidebar_label: Confidence Interval Coverage Normal
---

正規分布の平均の信頼区間のカバレッジを示す学習コンポーネント。

## オプション

* __intro__ | `(node|string)`: デフォルトの (インタラクティブな) イントロテキストを上書きします。. Default: `none`.
* __quartileNotation__ | `boolean`: は、クリティカル値の添え字として `alpha/2` を使用するか、単に `critical` を使用するかを制御します。. Default: `true`.
* __sampleStats__ | `boolean`: は，標準誤差を計算する際に，標本標準偏差を使用するか，既知の母集団標準偏差を使用するかを切り替えることができるかどうかを制御する．. Default: `true`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnConfidenceCoverageNormal />
```

