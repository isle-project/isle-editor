---
id: hierarchical-clustering
title: Hierarchical Clustering
sidebar_label: Hierarchical Clustering
---

层次聚类。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variables__ | `array<string> (required)`: 聚类变量的名称. Default: `none`.
* __linkage__ | `string`: "完整 "或 "单一. Default: `'complete'`.
* __distance__ | `string`: 使用距离("欧几里得"、"切比雪夫"、"余弦"、"哈明 "或 "曼哈顿"). Default: `'euclidean'`.
* __onResult__ | `function`: 用模型对象调用回调. Default: `onResult() {}`.


## 例子

```jsx live
<HierarchicalClustering 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

