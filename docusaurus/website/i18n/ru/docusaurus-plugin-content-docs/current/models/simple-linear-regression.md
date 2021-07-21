---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

Простая линейная регрессия.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __x__ | `string (required)`: объясняющая переменная. Default: `none`.
* __y__ | `string (required)`: переменная реакции. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __omitMissing__ | `boolean`: контролирует, следует ли пропустить недостающие значения при подгонке модели. Default: `false`.
* __onDiagnostics__ | `function`: обратный вызов с помощью диагностических графиков. Default: `none`.
* __onPredict__ | `function`: обратный вызов, вызываемый с помощью функции предсказания, чтобы сделать предсказания для новых данных. Default: `none`.


## Примеры

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

