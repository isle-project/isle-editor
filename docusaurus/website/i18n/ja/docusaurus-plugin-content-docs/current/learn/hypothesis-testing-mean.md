---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

母集団平均の仮説検定に関する学習コンポーネント。

## オプション

* __types__ | `array<string>`: ウィジェットが公開するテストのタイプ (`1サンプル`, `2サンプル`) を指定します。. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: ウィジェットによって公開されるテスト. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: 常に帰無仮説を1つの値として表示する. Default: `false`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `false`.
* __pValue__ | `string`: p値のカスタムラベル（LaTeXの数式文字列である必要があります。. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnMeanTest />
```

