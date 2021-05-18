---
id: decision-tree
title: Decision Tree
sidebar_label: Decision Tree
---

Деревья регрессии и классификации.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `(string|Factor) (required)`: переменная результата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __type__ | `string (required)`: `Классификация` для категориальных результатов или `Регрессия` для количественных результатов. Default: `none`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''. Default: `none`.
* __impurityMeasure__ | `string`: мера загрязнения (`джини` или `энтропия`). Default: `'gini'`.
* __scoreThreshold__ | `number`: порог разделения баллов. Default: `0.0075`.
* __maxTreeDepth__ | `number`: максимальная глубина дерева. Default: `5`.
* __minItemsCount__ | `number`: минимум наблюдений в узлах листьев. Default: `50`.
* __onPredict__ | `function`: вызов обратного вызова с помощью объекта модели при нажатии кнопки предикта. Default: `none`.


## Примеры

```jsx live
<DecisionTree 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

