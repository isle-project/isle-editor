---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Eenvoudige lineaire regressie.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __x__ | `string (required)`: verklarende variabele. Default: `none`.
* __y__ | `string (required)`: responsvariabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden in de modelaanpassing moeten worden weggelaten. Default: `false`.
* __onDiagnostics__ | `function`: callback ingeroepen met diagnostische percelen. Default: `none`.
* __onPredict__ | `function`: callback aangeroepen met een voorspellingsfunctie om voorspellingen te doen voor nieuwe gegevens. Default: `none`.


## Voorbeelden

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

