---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naiwniacy Bayes, zakładając, że przewidywania dotyczące przynależności do klasy są zgodne z normalnym rozkładem.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `(string|Factor) (required)`: zmienna wynikowa. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __omitMissing__ | `boolean`: kontroluje, czy należy pominąć brakujące wartości. Default: `false`.
* __onPredict__ | `function`: wywołanie zwrotne z przewidywaniami i pozostałościami po dopasowaniu modelu. Default: `none`.


## Przykłady

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

