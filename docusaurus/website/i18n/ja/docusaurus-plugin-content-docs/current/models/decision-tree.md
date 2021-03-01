---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

回帰と分類木。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `(string|Factor) (required)`: アウトカム変数. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: 一つ以上の予測変数. Default: `none`.
* __type__ | `string (required)`: カテゴリー的な結果であれば「分類」、定量的な結果であれば「回帰」。. Default: `none`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __impurityMeasure__ | `string`: 不純物量. Default: `'gini'`.
* __scoreThreshold__ | `number`: スプリットしきい値. Default: `0.0075`.
* __maxTreeDepth__ | `number`: 最大木深. Default: `5`.
* __minItemsCount__ | `number`: リーフノードでのオブザベーションの最小数. Default: `50`.
* __onPredict__ | `function`: 予測ボタンをクリックしたときにモデルオブジェクトで呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

