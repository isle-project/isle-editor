---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Учебный компонент для вычисления вероятностей гамма-распределения.

## Варианты

* __domain__ | `object`: объект массивов `x` и `y` с начальной и конечной точками для соответствующей оси. Default: `none`.
* __scaleParameterization__ | `boolean`: контролирует, следует ли использовать параметризацию, включающую параметр формы и шкалы, а не форму и скорость.. Default: `false`.
* __step__ | `(number|string)`: размер шага прокрутки. Default: `0.01`.
* __symbols__ | `boolean`: отображать ли для параметров греческие символы. Default: `true`.
* __tabs__ | `array<string>`: какие вкладки отображать (либо `маленькие`, либо `грелка`, либо `диапазон`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<LearnGammaDistribution />
```

