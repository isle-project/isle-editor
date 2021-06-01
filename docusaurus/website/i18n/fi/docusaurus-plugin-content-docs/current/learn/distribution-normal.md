---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Oppimiskomponentti normaalijakauman todennäköisyyksien laskemiseen.

## Vaihtoehdot

* __domain__ | `object`: `x`- ja `y`-matriisien objekti, jossa on kunkin akselin alku- ja loppupisteet.. Default: `none`.
* __hideCDF__ | `boolean`: valvoo, piilotetaanko CDF-diagrammit. Default: `false`.
* __minStDev__ | `number`: pienin keskihajonta. Default: `1`.
* __step__ | `(number|string)`: vierityssyötteen askelkoko. Default: `0.01`.
* __tabs__ | `array<string>`: mitkä välilehdet näytetään (joko "pienempi", "suurempi" tai "alue").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<LearnNormalDistribution />
```

