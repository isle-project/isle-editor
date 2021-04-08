---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

母集団の割合に対する仮説検定に関する学習コンポーネント。

## オプション

* __types__ | `array<string>`: ウィジェットが公開するテストのタイプ (`1サンプル`, `2サンプル`) を指定します。. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: 常に帰無仮説を1つの値として表示する. Default: `false`.
* __pValue__ | `string`: p値のカスタムラベル（LaTeXの数式文字列である必要があります。. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnProportionTest />
```

