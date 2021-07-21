---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

Множественная линейная регрессия.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `string (required)`: переменная результата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''. Default: `none`.
* __omitMissing__ | `boolean`: контролирует, следует ли пропустить недостающие значения. Default: `false`.
* __intercept__ | `boolean`: контролирует, подходить ли к модели с термином перехвата. Default: `true`.
* __onDiagnostics__ | `function`: обратный вызов с помощью диагностических графиков. Default: `none`.
* __onPredict__ | `function`: обратный вызов, вызываемый с помощью функции предсказания, чтобы сделать предсказания для новых данных. Default: `none`.


## Примеры

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

