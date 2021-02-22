---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Обучающий компонент, иллюстрирующий центральную предельную теорию (CLT) при выборке из предоставленного набора данных.

## Варианты

* __data__ | `object (required)`: объект данных с ключами соответствует именам переменных и значениям, содержащим значения соответствующих переменных. Default: `none`.
* __hidePopulationStdev__ | `boolean`: скрытое отображение населения со стандартным отклонением. Default: `false`.
* __samples__ | `(array<number>|number)`: массив чисел или одно число, обозначающее размеры образца, который может быть нарисован. Default: `25`.
* __populationProbabilities__ | `boolean`: следует ли отображать уравнения для расчета вероятностей численности населения. Default: `false`.
* __quantiles__ | `boolean`: показывать ли инструмент для расчета любых квантилей. Default: `false`.
* __variables__ | `array (required)`: имена переменных, которые могут быть выбраны из. Default: `none`.


## Примеры

```jsx live
<LearnSampleCLT />
```

