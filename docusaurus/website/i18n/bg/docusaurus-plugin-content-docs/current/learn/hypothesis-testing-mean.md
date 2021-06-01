---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Учебен компонент за проверка на хипотези за средната стойност на популацията.

## Опции

* __types__ | `array<string>`: типът(ите) тест(и) (`Една извадка`, `Две извадки`), който джаджата трябва да покаже. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: теста(ите), показван(и) от джаджата. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: винаги показва нулевата хипотеза като единична стойност.. Default: `false`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `false`.
* __pValue__ | `string`: потребителски етикет за p-стойността (трябва да бъде низ от уравнения в LaTeX). Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

```jsx live
<LearnMeanTest />
```

