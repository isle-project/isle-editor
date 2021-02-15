---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Наив Бэйес предполагая, что предсказатели, дающие членство в классе, следуют нормальному распределению.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `string (required)`: переменная результата. Default: `none`.
* __x__ | `(array<string>|string) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''.. Default: `none`.
* __omitMissing__ | `boolean`: контролирует, следует ли пропустить недостающие значения. Default: `false`.
* __onPredict__ | `function`: вызов обратного вызова с предсказаниями и остатками после подгонки модели. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

