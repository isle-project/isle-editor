---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Učna komponenta za izračun verjetnosti normalne porazdelitve.

## Možnosti

* __domain__ | `object`: objekt polja `x` in `y` z začetno in končno točko za ustrezno os. Default: `none`.
* __hideCDF__ | `boolean`: nadzoruje, ali naj se skrije parcela CDF.. Default: `false`.
* __minStDev__ | `number`: najmanjši standardni odklon. Default: `1`.
* __step__ | `(number|string)`: velikost koraka vnosa za pomikanje. Default: `0.01`.
* __tabs__ | `array<string>`: kateri zavihki se prikažejo (`less`, `greater` ali `območje`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<LearnNormalDistribution />
```

