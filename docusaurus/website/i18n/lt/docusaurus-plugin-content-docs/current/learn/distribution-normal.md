---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Mokymosi komponentas, skirtas normaliojo skirstinio tikimybėms apskaičiuoti.

## Parinktys

* __domain__ | `object`: `x` ir `y` masyvų objektas su atitinkamos ašies pradžios ir pabaigos taškais.. Default: `none`.
* __hideCDF__ | `boolean`: kontroliuoja, ar slėpti CDF sklypus.. Default: `false`.
* __minStDev__ | `number`: mažiausias standartinis nuokrypis. Default: `1`.
* __step__ | `(number|string)`: slinkties įvesties žingsnio dydis. Default: `0.01`.
* __tabs__ | `array<string>`: kokius skirtukus rodyti (`mažesnius`, `didesnius` arba `didesnius`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<LearnNormalDistribution />
```

