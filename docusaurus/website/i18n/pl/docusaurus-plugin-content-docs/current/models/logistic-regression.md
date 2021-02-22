---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Wielokrotna regresja liniowa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `string (required)`: zmienna wynikowa. Default: `none`.
* __success__ | `any (required)`: kategoria sukcesu `y`. Default: `none`.
* __x__ | `(array<string>|string) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, czy należy pominąć brakujące wartości. Default: `false`.
* __intercept__ | `boolean`: kontroluje, czy model ma być wyposażony w termin przechwytywania. Default: `true`.
* __onPredict__ | `function`: wywołanie zwrotne z przewidywaniami i pozostałościami po dopasowaniu modelu. Default: `none`.


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

