---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-meansクラスタリング。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variables__ | `array<string> (required)`: クラスタリングに使用される変数名. Default: `none`.
* __K__ | `number`: クラスター数. Default: `3`.
* __elbowPlot__ | `boolean`: エルボープットを含めるかどうかを示す boolean。. Default: `false`.
* __initialization__ | `string`: 初期化メソッド (`kmeans++`, `random`, `mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: モデルオブジェクトで呼び出されるコールバック. Default: `onResult() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

