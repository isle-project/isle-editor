---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

Множественная линейная регрессия.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `string (required)`: переменная результата. Default: `none`.
* __success__ | `any (required)`: категория успеха `y`. Default: `none`.
* __x__ | `(array<string>|string) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''.. Default: `none`.
* __omitMissing__ | `boolean`: контролирует, следует ли пропустить недостающие значения. Default: `false`.
* __intercept__ | `boolean`: контролирует, подходить ли к модели с термином перехвата. Default: `true`.
* __onPredict__ | `function`: вызов обратного вызова с предсказаниями и остатками после подгонки модели. Default: `none`.


## Examples

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

