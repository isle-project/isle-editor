---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Õppekomponent normaaljaotuse tõenäosuste arvutamiseks.

## Valikud

* __domain__ | `object`: objekt "x" ja "y" massiividest, millel on vastava telje alg- ja lõpp-punktid.. Default: `none`.
* __hideCDF__ | `boolean`: kontrollib, kas CDFi graafikuid varjata. Default: `false`.
* __minStDev__ | `number`: minimaalne standardhälve. Default: `1`.
* __step__ | `(number|string)`: kerimise sisendi sammu suurus. Default: `0.01`.
* __tabs__ | `array<string>`: milliseid vahekaarte kuvada (kas "väiksem", "suurem" või "vahemik").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<LearnNormalDistribution />
```

