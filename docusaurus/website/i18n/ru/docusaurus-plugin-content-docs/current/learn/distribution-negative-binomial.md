---
id: distribution-negative-binomial
title: Negative Binomial Distribution
sidebar_label: Negative Binomial Distribution
---

Компонент обучения для вычисления вероятности отрицательного биномиального распределения.

## Options

* __countTrials__ | `boolean`: устанавливается в true, если вместо подсчета количества неудачных попыток до r-го успеха следует определить случайную переменную из отрицательного биномиального распределения как количество попыток до r-го успеха. Default: `false`.
* __step__ | `(number|string)`: размер шага прокрутки. Default: `0.01`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<LearnNegativeBinomialDistribution />
```

