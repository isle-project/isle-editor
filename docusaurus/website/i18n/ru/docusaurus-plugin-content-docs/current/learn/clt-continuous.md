---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Компонент обучения, иллюстрирующий центральную предельную теорию (CLT) для выбранного непрерывного распределения.

## Варианты

* __distributions__ | `array<string>`: статистические распределения на выбор ("единообразные", "экспоненциальные" и/или "нормальные"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: массив чисел или одно число, обозначающее размеры образца, который может быть нарисован. Default: `25`.
* __hideFormulas__ | `boolean`: контролирует, скрывать ли формулы в тексте компонента. Default: `false`.


## Примеры

```jsx live
<LearnContinuousCLT />
```

