---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Meervoudige lineaire regressie.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `string (required)`: resultaatvariabele. Default: `none`.
* __success__ | `any (required)`: succescategorie van `y`. Default: `none`.
* __x__ | `(array<string>|string) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden moeten worden weggelaten. Default: `false`.
* __intercept__ | `boolean`: controleert of er een model met een onderscheppende term moet passen. Default: `true`.
* __onPredict__ | `function`: callback ingeroepen met voorspellingen en restmateriaal na modelaanpassing. Default: `none`.


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

