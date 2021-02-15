---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes assuming that the predictors given the class membership follow a normal distribution.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __y__ | `string (required)`: outcome variable. Default: `none`.
* __x__ | `(array<string>|string) (required)`: one or more predictor variables. Default: `none`.
* __quantitative__ | `array<string> (required)`: array of variables in `data` that are `quantitative`. Default: `none`.
* __omitMissing__ | `boolean`: controls whether to omit missing values. Default: `false`.
* __onPredict__ | `function`: callback invoked with predictions and residuals after model fitting. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

