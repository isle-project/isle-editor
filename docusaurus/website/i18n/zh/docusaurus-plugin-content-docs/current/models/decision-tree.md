---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

回归和分类树。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `string (required)`: 结果变量. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一个或多个预测变量. Default: `none`.
* __type__ | `string (required)`: 分类的 "分类 "或定量结果的 "回归"。. Default: `none`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __impurityMeasure__ | `string`: 不纯物测定法("gini "或 "熵"). Default: `'gini'`.
* __scoreThreshold__ | `number`: 分数关口. Default: `0.0075`.
* __maxTreeDepth__ | `number`: 最大树深. Default: `5`.
* __minItemsCount__ | `number`: 叶子节点的最小观测数. Default: `50`.
* __onPredict__ | `function`: 当点击预测按钮时，通过模型对象调用回调。. Default: `none`.


## Examples

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

