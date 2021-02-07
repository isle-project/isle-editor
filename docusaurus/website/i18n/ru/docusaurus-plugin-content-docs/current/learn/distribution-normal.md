---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Компонент обучения для расчета вероятностей нормального распределения.

## Options

* __domain__ | `object`: объект массивов `x` и `y` с начальной и конечной точками для соответствующей оси. Default: `none`.
* __hideCDF__ | `boolean`: управляет тем, скрывать ли CDF сюжеты. Default: `false`.
* __minStDev__ | `number`: минимальное стандартное отклонение. Default: `1`.
* __step__ | `(number|string)`: размер шага прокрутки. Default: `0.01`.
* __tabs__ | `array<string>`: какие вкладки отображать (либо `маленькие`, либо `грелка`, либо `диапазон`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

