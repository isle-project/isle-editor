---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Simple linear regression.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __x__ | `string (required)`: explanatory variable. Default: `none`.
* __y__ | `string (required)`: response variable. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __omitMissing__ | `boolean`: controls whether to omit missing values in model fitting. Default: `false`.
* __onDiagnostics__ | `function`: callback invoked with diagnostic plots. Default: `none`.
* __onPredict__ | `function`: callback invoked with a predict function to make predictions for new data. Default: `none`.


## Examples

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

