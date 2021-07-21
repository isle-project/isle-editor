---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Wielokrotna regresja liniowa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `(string|Factor) (required)`: zmienna wynikowa. Default: `none`.
* __success__ | `any (required)`: kategoria sukcesu `y`. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, czy należy pominąć brakujące wartości. Default: `false`.
* __intercept__ | `boolean`: kontroluje, czy model ma być wyposażony w termin przechwytywania. Default: `true`.
* __onPredict__ | `function`: wywołanie zwrotne wywołane z funkcją przewidywania w celu dokonania przewidywań dla nowych danych. Default: `none`.


## Przykłady

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

