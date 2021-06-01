---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Учебен компонент за изчисляване на вероятности на нормално разпределение.

## Опции

* __domain__ | `object`: обект от масиви `x` и `y` с началната и крайната точка за съответната ос. Default: `none`.
* __hideCDF__ | `boolean`: контролира дали да се скрият CDF графиките. Default: `false`.
* __minStDev__ | `number`: минимално стандартно отклонение. Default: `1`.
* __step__ | `(number|string)`: размер на стъпката на входа за превъртане. Default: `0.01`.
* __tabs__ | `array<string>`: кои табове да се показват (или `малки`, `големи`, или `обхват`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

```jsx live
<LearnNormalDistribution />
```

