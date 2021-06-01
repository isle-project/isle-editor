---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Регресия и класификационни дървета.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `(string|Factor) (required)`: променлива на резултата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __type__ | `string (required)`: `Класификация` за категорични или `Регресия` за количествени резултати. Default: `none`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __impurityMeasure__ | `string`: мярка за примеси (`gini` или `entropy`). Default: `'gini'`.
* __scoreThreshold__ | `number`: праг на резултата за разделяне. Default: `0.0075`.
* __maxTreeDepth__ | `number`: максимална дълбочина на дървото. Default: `5`.
* __minItemsCount__ | `number`: минимален брой наблюдения в листните възли. Default: `50`.
* __onPredict__ | `function`: извикване на обратна връзка с обекта на модела при щракване върху бутона за предсказване. Default: `none`.


## Примери

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

