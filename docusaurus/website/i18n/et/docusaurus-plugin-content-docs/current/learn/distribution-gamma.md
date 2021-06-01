---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Õppekomponent gammajaotuse tõenäosuste arvutamiseks.

## Valikud

* __domain__ | `object`: objekt "x" ja "y" massiividest, millel on vastava telje alg- ja lõpp-punktid.. Default: `none`.
* __scaleParameterization__ | `boolean`: kontrollib, kas kasutada kuju ja kiiruse asemel kuju ja skaala parameetrit sisaldavat parameetrit.. Default: `false`.
* __step__ | `(number|string)`: kerimise sisendi sammu suurus. Default: `0.01`.
* __symbols__ | `boolean`: kas näidata parameetrite jaoks kreeka sümboleid. Default: `true`.
* __tabs__ | `array<string>`: milliseid vahekaarte kuvada (kas "väiksem", "suurem" või "vahemik").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<LearnGammaDistribution />
```

