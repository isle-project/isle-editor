---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Tanulási komponens a normál eloszlás valószínűségeinek kiszámításához.

## Opciók

* __domain__ | `object`: az "x" és "y" tömbök objektuma a megfelelő tengely kezdő- és végpontjaival.. Default: `none`.
* __hideCDF__ | `boolean`: szabályozza, hogy elrejtse-e a CDF ábrákat. Default: `false`.
* __minStDev__ | `number`: minimális szórás. Default: `1`.
* __step__ | `(number|string)`: a görgetési bemenet lépésmérete. Default: `0.01`.
* __tabs__ | `array<string>`: mely lapok jelenjenek meg (a "kisebb", a "nagyobb" vagy a "tartomány" lapok).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<LearnNormalDistribution />
```

