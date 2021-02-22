---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regression.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: one or more predictor variables. Default: `none`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __lambda__ | `number`: regularization parameter. Default: `0.001`.
* __intercept__ | `boolean`: controls whether to fit a model with an intercept term. Default: `true`.
* __onPredict__ | `function`: callback invoked with predictions and residuals after model fitting. Default: `onPredict() {}`.


## Examples

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

