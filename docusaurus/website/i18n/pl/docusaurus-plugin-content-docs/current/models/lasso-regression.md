---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Regresja LASSO.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `string (required)`: zmienna wynikowa. Default: `none`.
* __x__ | `(array<string>|string) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __lambda__ | `number`: parametr regularyzacji. Default: `0.001`.
* __intercept__ | `boolean`: kontroluje, czy model ma być wyposażony w termin przechwytywania. Default: `true`.


## Przykłady

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

