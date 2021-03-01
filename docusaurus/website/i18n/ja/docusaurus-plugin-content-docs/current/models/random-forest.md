---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

回帰と分類木。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `(string|Factor) (required)`: アウトカム変数. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: 一つ以上の予測変数. Default: `none`.
* __type__ | `string`: 現在のところ、カテゴリカルな回答に対しては `Classification` のみがサポートされています。. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __nTrees__ | `number`: 樹数. Default: `50`.
* __nTry__ | `number`: 各分割でチェックする予測変数の数. Default: `1`.
* __impurityMeasure__ | `string`: 不純物量. Default: `'gini'`.
* __scoreThreshold__ | `number`: スプリットしきい値. Default: `0.01`.
* __maxTreeDepth__ | `number`: 最大木深. Default: `20`.
* __minItemsCount__ | `number`: リーフノードでのオブザベーションの最小数. Default: `50`.
* __onPredict__ | `function`: 予測ボタンをクリックしたときにモデルオブジェクトで呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

