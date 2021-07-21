---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Prosta regresja liniowa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __x__ | `string (required)`: zmienna objaśniająca. Default: `none`.
* __y__ | `string (required)`: zmienna reakcji. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupowania. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, czy należy pominąć brakujące wartości w montażu modelu. Default: `false`.
* __onDiagnostics__ | `function`: wywołanie zwrotne z wykresami diagnostycznymi. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## Przykłady

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

