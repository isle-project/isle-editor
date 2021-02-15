---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

階層的クラスタリング。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variables__ | `array<string> (required)`: クラスタリングに使用される変数名. Default: `none`.
* __linkage__ | `string`: 不完全`かシングル`のいずれか. Default: `'complete'`.
* __distance__ | `string`: 使用される距離 (`euclidean`, `chebyshev`, `cosine`, `hamming`, `manhattan`). Default: `'euclidean'`.
* __onResult__ | `function`: モデルオブジェクトで呼び出されるコールバック. Default: `onResult() {}`.


## Examples

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

