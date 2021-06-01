---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Случайни гори.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `(string|Factor) (required)`: променлива на резултата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __type__ | `string`: в момента се поддържа само `Класификация` за категорични отговори. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __nTrees__ | `number`: брой дървета. Default: `50`.
* __nTry__ | `number`: брой прогнозни фактори за проверка при всяко разделяне. Default: `1`.
* __impurityMeasure__ | `string`: мярка за примеси (`gini` или `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: праг на резултата за разделяне. Default: `0.01`.
* __maxTreeDepth__ | `number`: максимална дълбочина на дървото. Default: `20`.
* __minItemsCount__ | `number`: минимален брой наблюдения в листните възли. Default: `50`.
* __onPredict__ | `function`: извикване на обратна връзка с обекта на модела при щракване върху бутона за предсказване. Default: `none`.


## Примери

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

