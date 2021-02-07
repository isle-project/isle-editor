---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Учебный компонент по тестированию гипотез для средней популяции.

## Options

* __types__ | `array<string>`: тип(ы) теста (`One-Sample`, `Two-Sample`), который виджет должен разоблачать. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: тест(ы), экспонируемые виджетами. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: всегда отображать нулевую гипотезу в виде одного значения. Default: `false`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<LearnMeanTest />
```

