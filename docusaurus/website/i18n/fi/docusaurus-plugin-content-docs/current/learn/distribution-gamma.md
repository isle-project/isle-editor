---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Oppimiskomponentti gammajakauman todennäköisyyksien laskemiseen.

## Vaihtoehdot

* __domain__ | `object`: `x`- ja `y`-matriisien objekti, jossa on kunkin akselin alku- ja loppupisteet.. Default: `none`.
* __scaleParameterization__ | `boolean`: valitsee, käytetäänkö parametrisointia, jossa käytetään muoto- ja asteikkoparametria muodon ja nopeuden sijasta.. Default: `false`.
* __step__ | `(number|string)`: vierityssyötteen askelkoko. Default: `0.01`.
* __symbols__ | `boolean`: näytetäänkö parametreille kreikkalaiset symbolit. Default: `true`.
* __tabs__ | `array<string>`: mitkä välilehdet näytetään (joko `less`, `greater` tai "alue").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<LearnGammaDistribution />
```

