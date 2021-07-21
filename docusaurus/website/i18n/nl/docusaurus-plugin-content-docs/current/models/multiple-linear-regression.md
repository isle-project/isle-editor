---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Meervoudige lineaire regressie.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden moeten worden weggelaten. Default: `false`.
* __intercept__ | `boolean`: controleert of er een model met een onderscheppende term moet passen. Default: `true`.
* __onDiagnostics__ | `function`: callback ingeroepen met diagnostische percelen. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Voorbeelden

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

