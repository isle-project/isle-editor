---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Tanulási komponens a gammaeloszlás valószínűségeinek kiszámításához.

## Opciók

* __domain__ | `object`: az "x" és "y" tömbök objektuma a megfelelő tengely kezdő- és végpontjaival.. Default: `none`.
* __scaleParameterization__ | `boolean`: szabályozza, hogy a shape és rate helyett a shape és scale paramétert tartalmazó paraméterezést használja-e.. Default: `false`.
* __step__ | `(number|string)`: a görgetési bemenet lépésmérete. Default: `0.01`.
* __symbols__ | `boolean`: a paraméterek görög szimbólumainak megjelenítése. Default: `true`.
* __tabs__ | `array<string>`: mely lapok jelenjenek meg (a "kisebb", a "nagyobb" vagy a "tartomány" lapok).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<LearnGammaDistribution />
```

