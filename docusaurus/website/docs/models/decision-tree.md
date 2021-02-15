---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Regression and classification trees.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: one or more predictor variables. Default: `none`.
* __type__ | `string (required)`: `Classification` for categorical or `Regression` for quantitative outcomes. Default: `none`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __impurityMeasure__ | `string`: impurity measure (`gini` or `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: score threshold for split. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maximum tree depth. Default: `5`.
* __minItemsCount__ | `number`: minimum # of observations in leaf nodes. Default: `50`.
* __onPredict__ | `function`: callback invoked with model object when clicking on the predict button. Default: `none`.


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

