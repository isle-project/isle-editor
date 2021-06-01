---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Výučbová zložka na výpočet pravdepodobností normálneho rozdelenia.

## Možnosti

* __domain__ | `object`: objekt polí `x` a `y` s počiatočným a koncovým bodom pre príslušnú os. Default: `none`.
* __hideCDF__ | `boolean`: kontroluje, či sa majú skryť grafy CDF. Default: `false`.
* __minStDev__ | `number`: minimálna štandardná odchýlka. Default: `1`.
* __step__ | `(number|string)`: veľkosť kroku rolovacieho vstupu. Default: `0.01`.
* __tabs__ | `array<string>`: ktoré záložky sa majú zobraziť (buď `menšie`, `veľšie` alebo `rozsah`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<LearnNormalDistribution />
```

