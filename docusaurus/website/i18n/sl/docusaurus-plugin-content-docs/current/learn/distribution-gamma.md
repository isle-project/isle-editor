---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Učna komponenta za izračun verjetnosti porazdelitve gama.

## Možnosti

* __domain__ | `object`: objekt polja `x` in `y` z začetno in končno točko za ustrezno os. Default: `none`.
* __scaleParameterization__ | `boolean`: določa, ali naj se namesto oblike in stopnje uporabi parametrizacija, ki vključuje parameter oblike in lestvice.. Default: `false`.
* __step__ | `(number|string)`: velikost koraka vnosa za pomikanje. Default: `0.01`.
* __symbols__ | `boolean`: ali naj se za parametre prikažejo grški simboli. Default: `true`.
* __tabs__ | `array<string>`: kateri zavihki se prikažejo (`less`, `greater` ali `območje`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<LearnGammaDistribution />
```

