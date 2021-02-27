---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

単純な線形回帰。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __x__ | `string (required)`: 説明変数. Default: `none`.
* __y__ | `string (required)`: 応答変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __omitMissing__ | `boolean`: モデルフィッティングで欠損値を省略するかどうかを制御します。. Default: `false`.
* __onDiagnostics__ | `function`: 診断プロットで呼び出されるコールバック. Default: `none`.
* __onPredict__ | `function`: 適合値と残差で呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

