---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Компонент за обучение за изчисляване на вероятностите на гама разпределение.

## Опции

* __domain__ | `object`: обект от масиви `x` и `y` с началната и крайната точка за съответната ос. Default: `none`.
* __scaleParameterization__ | `boolean`: контролира дали да се използва параметризация, включваща параметър за форма и мащаб, вместо за форма и скорост.. Default: `false`.
* __step__ | `(number|string)`: размер на стъпката на входа за превъртане. Default: `0.01`.
* __symbols__ | `boolean`: дали да се показват гръцки символи за параметрите. Default: `true`.
* __tabs__ | `array<string>`: кои табове да се показват (или `малки`, `големи`, или `обхват`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

```jsx live
<LearnGammaDistribution />
```

