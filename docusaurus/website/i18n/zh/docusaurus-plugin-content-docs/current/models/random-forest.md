---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

回归和分类树。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `(string|Factor) (required)`: 结果变量. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: 一个或多个预测变量. Default: `none`.
* __type__ | `string`: 目前只支持分类答复的 "分类"。. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __nTrees__ | `number`: 棵数. Default: `50`.
* __nTry__ | `number`: 每次拆分时要检查的预测因子的数量. Default: `1`.
* __impurityMeasure__ | `string`: 不纯物测定法("gini "或 "熵"). Default: `'gini'`.
* __scoreThreshold__ | `number`: 分数关口. Default: `0.01`.
* __maxTreeDepth__ | `number`: 最大树深. Default: `20`.
* __minItemsCount__ | `number`: 叶子节点的最小观测数. Default: `50`.
* __onPredict__ | `function`: 当点击预测按钮时，通过模型对象调用回调。. Default: `none`.


## 例子

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

