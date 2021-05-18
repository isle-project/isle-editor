---
id: random-forest
title: Random Forest
sidebar_label: Random Forest
---

Деревья регрессии и классификации.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `(string|Factor) (required)`: переменная результата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __type__ | `string`: в настоящее время поддерживается только `Классификация` для категориальных ответов. Default: `'Classification'`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''. Default: `none`.
* __nTrees__ | `number`: количество деревьев. Default: `50`.
* __nTry__ | `number`: количество предикторов, которое необходимо проверять на каждом отрезке. Default: `1`.
* __impurityMeasure__ | `string`: мера загрязнения (`джини` или `энтропия`). Default: `'gini'`.
* __scoreThreshold__ | `number`: порог разделения баллов. Default: `0.01`.
* __maxTreeDepth__ | `number`: максимальная глубина дерева. Default: `20`.
* __minItemsCount__ | `number`: минимум наблюдений в узлах листьев. Default: `50`.
* __onPredict__ | `function`: вызов обратного вызова с помощью объекта модели при нажатии кнопки предикта. Default: `none`.


## Примеры

```jsx live
<RandomForest 
    data={heartdisease} 
    type="Classification"
    y="Complications"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

