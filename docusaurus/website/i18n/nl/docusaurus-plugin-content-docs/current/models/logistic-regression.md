---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Meervoudige lineaire regressie.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __y__ | `(string|Factor) (required)`: resultaatvariabele. Default: `none`.
* __success__ | `any (required)`: succescategorie van `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: een of meer voorspellende variabelen. Default: `none`.
* __quantitative__ | `array<string> (required)`: array van variabelen in `data` die `kwantitatief` zijn. Default: `none`.
* __omitMissing__ | `boolean`: controleert of ontbrekende waarden moeten worden weggelaten. Default: `false`.
* __intercept__ | `boolean`: controleert of er een model met een onderscheppende term moet passen. Default: `true`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Voorbeelden

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

