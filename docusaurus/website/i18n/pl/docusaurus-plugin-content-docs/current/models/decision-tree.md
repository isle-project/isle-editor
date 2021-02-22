---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Drzewa regresji i klasyfikacji.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __y__ | `string (required)`: zmienna wynikowa. Default: `none`.
* __x__ | `(array<string>|string) (required)`: jedna lub więcej zmiennych predykcyjnych. Default: `none`.
* __type__ | `string (required)`: `Klasyfikacja` dla wyników ilościowych lub `Regresja` dla wyników kategorycznych. Default: `none`.
* __quantitative__ | `array<string> (required)`: szereg zmiennych w `danych`, które są `ilościowe`. Default: `none`.
* __impurityMeasure__ | `string`: miara zanieczyszczenia (`gini` lub `entropia`). Default: `'gini'`.
* __scoreThreshold__ | `number`: próg punktowy dla podziału. Default: `0.0075`.
* __maxTreeDepth__ | `number`: maksymalna głębokość drzewa. Default: `5`.
* __minItemsCount__ | `number`: minimum # obserwacji w węzłach liściowych. Default: `50`.
* __onPredict__ | `function`: wywołanie zwrotne z obiektem modelu po kliknięciu na przycisk przewidywania. Default: `none`.


## Przykłady

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

