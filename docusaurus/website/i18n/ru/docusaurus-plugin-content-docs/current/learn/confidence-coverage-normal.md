---
id: confidence-coverage-normal
title: Confidence Interval Coverage Normal
sidebar_label: Confidence Interval Coverage Normal
---

Компонент обучения, иллюстрирующий охват доверительных интервалов для среднего нормального распределения.

## Варианты

* __intro__ | `(node|string)`: переопределяет вводный текст по умолчанию (интерактивный). Default: `none`.
* __quartileNotation__ | `boolean`: контролирует, использовать ли `альфа/2` в качестве подписчика для критического значения или просто `критического''. Default: `true`.
* __sampleStats__ | `boolean`: контролирует, следует ли при расчете стандартной погрешности переключаться между использованием стандартного отклонения выборки или известным стандартным отклонением популяции. Default: `true`.


## Примеры

```jsx live
<LearnConfidenceCoverageNormal />
```

