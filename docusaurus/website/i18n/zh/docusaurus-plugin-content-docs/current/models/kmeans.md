---
id: kmeans
title: k-means Clustering
sidebar_label: k-means Clustering
---

K-means聚类。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __variables__ | `array<string> (required)`: 聚类变量的名称. Default: `none`.
* __K__ | `number`: 簇数. Default: `3`.
* __elbowPlot__ | `boolean`: 表示是否包括肘部图的布尔值. Default: `false`.
* __initialization__ | `string`: 初始化方法(`kmeans++`、`random`或`mostDistant`). Default: `'kmeans++'`.
* __onResult__ | `function`: 用模型对象调用回调. Default: `onResult() {}`.


## 例子

```jsx live
<KMeans 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
/>
```

