---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

散布図行列。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __variables__ | `array (required)`: 行列に表示する変数の配列. Default: `none`.
* __color__ | `string`: 点の色に対応させる範疇変数. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

