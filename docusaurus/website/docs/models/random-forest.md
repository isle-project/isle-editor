---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Random Forests.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: one or more predictor variables. Default: `none`.
* __type__ | `string`: currently only `Classification` for categorical responses is supported. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __nTrees__ | `number`: number of trees. Default: `50`.
* __nTry__ | `number`: number of predictors to check at each split. Default: `1`.
* __impurityMeasure__ | `string`: impurity measure (`gini` or `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: score threshold for split. Default: `0.01`.
* __maxTreeDepth__ | `number`: maximum tree depth. Default: `20`.
* __minItemsCount__ | `number`: minimum # of observations in leaf nodes. Default: `50`.
* __onPredict__ | `function`: callback invoked with model object when clicking on the predict button. Default: `none`.


## Examples

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

