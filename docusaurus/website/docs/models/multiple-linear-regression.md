---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Multiple linear regression.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: one or more predictor variables. Default: `none`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __omitMissing__ | `boolean`: controls whether to omit missing values. Default: `false`.
* __intercept__ | `boolean`: controls whether to fit a model with an intercept term. Default: `true`.
* __onDiagnostics__ | `function`: callback invoked with diagnostic plots. Default: `none`.
* __onPredict__ | `function`: callback invoked with predictions and residuals after model fitting. Default: `none`.


## Examples

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

