---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Logistic regression.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __success__ | `any (required)`: success category of `y`. Default: `none`.
* __x__ | `(array<string>|string) (required)`: one or more predictor variables. Default: `none`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __omitMissing__ | `boolean`: controls whether to omit missing values. Default: `false`.
* __intercept__ | `boolean`: controls whether to fit a model with an intercept term. Default: `true`.
* __onPredict__ | `function`: callback invoked with predictions and residuals after model fitting. Default: `none`.


## Examples

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

