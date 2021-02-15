---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Eenvoudige lineaire regressie.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __x__ | `string (required)`: verklarende variabele. Default: `none`.
* __y__ | `string (required)`: responsvariabele. Default: `none`.
* __group__ | `string`: groepsvariabele. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden in de modelaanpassing moeten worden weggelaten. Default: `false`.
* __onDiagnostics__ | `function`: callback ingeroepen met diagnostische percelen. Default: `none`.
* __onPredict__ | `function`: callback ingeroepen met aangepaste waarden en residuen. Default: `none`.


## Examples

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

