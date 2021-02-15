---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO regressie.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __x__ | `(array<string>|string) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __lambda__ | `number`: regularisatieparameter. Default: `0.001`.
* __intercept__ | `boolean`: controleert of er een model met een onderscheppende term moet passen. Default: `true`.


## Examples

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

