---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Komponent edukacyjny ilustrujący centralne twierdzenie graniczne (CLT) podczas pobierania próbek z dostarczonego zestawu danych.

## Opcje

* __data__ | `object (required)`: obiekt danych z kluczami odpowiada nazwom zmiennych i wartościom posiadającym wartości odpowiednich zmiennych. Default: `none`.
* __hidePopulationStdev__ | `boolean`: ukryć wyświetlanie odchylenia standardowego populacji. Default: `false`.
* __samples__ | `(array<number>|number)`: układ liczb lub pojedynczych liczb oznaczających wielkości próbek, które można pobrać. Default: `25`.
* __populationProbabilities__ | `boolean`: czy należy wyświetlać równania do obliczania prawdopodobieństwa populacji. Default: `false`.
* __quantiles__ | `boolean`: czy pokazywać narzędzie do obliczania dowolnych kwantyliów. Default: `false`.
* __variables__ | `array (required)`: nazwy zmiennych, z których można pobierać próbki. Default: `none`.


## Przykłady

```jsx live
<LearnSampleCLT />
```

