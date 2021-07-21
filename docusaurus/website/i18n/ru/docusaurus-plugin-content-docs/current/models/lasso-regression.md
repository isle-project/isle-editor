---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

Регрессия ЛАССО.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __y__ | `string (required)`: переменная результата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: одна или несколько переменных предиктора. Default: `none`.
* __quantitative__ | `array<string> (required)`: массив переменных в `данных`, которые являются `количественными''. Default: `none`.
* __lambda__ | `number`: параметр регуляризации. Default: `0.001`.
* __intercept__ | `boolean`: контролирует, подходить ли к модели с термином перехвата. Default: `true`.
* __onPredict__ | `function`: обратный вызов, вызываемый с помощью функции предсказания, чтобы сделать предсказания для новых данных. Default: `onPredict() {}`.


## Примеры

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

