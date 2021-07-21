---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Wielokrotna regresja liniowa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `string (required)`: zmienna wynikowa. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, czy należy pominąć brakujące wartości. Default: `false`.
* __intercept__ | `boolean`: kontroluje, czy model ma być wyposażony w termin przechwytywania. Default: `true`.
* __onDiagnostics__ | `function`: wywołanie zwrotne z wykresami diagnostycznymi. Default: `none`.
* __onPredict__ | `function`: wywołanie zwrotne wywołane z funkcją przewidywania w celu dokonania przewidywań dla nowych danych. Default: `none`.


## Przykłady

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

