---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Drzewa regresji i klasyfikacji.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `string (required)`: zmienna wynikowa. Default: `none`.
* __x__ | `(array<string>|string) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __type__ | `string`: obecnie obsługiwana jest tylko "Klasyfikacja" dla odpowiedzi kategorycznych. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __nTrees__ | `number`: liczba drzew. Default: `50`.
* __nTry__ | `number`: liczba prognostyków do sprawdzenia przy każdym podziale. Default: `1`.
* __impurityMeasure__ | `string`: miara zanieczyszczenia (`gini` lub `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: próg punktowy dla podziału. Default: `0.01`.
* __maxTreeDepth__ | `number`: maksymalna głębokość drzewa. Default: `20`.
* __minItemsCount__ | `number`: minimum # obserwacji w węzłach liściowych. Default: `50`.
* __onPredict__ | `function`: wywołanie zwrotne z obiektem modelu po kliknięciu na przycisk przewidywania. Default: `none`.


## Examples

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

