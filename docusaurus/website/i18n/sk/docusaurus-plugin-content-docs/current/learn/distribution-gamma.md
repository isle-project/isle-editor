---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Učebná zložka na výpočet pravdepodobností gama rozdelenia.

## Možnosti

* __domain__ | `object`: objekt polí `x` a `y` s počiatočným a koncovým bodom pre príslušnú os. Default: `none`.
* __scaleParameterization__ | `boolean`: kontroluje, či sa má použiť parametrizácia zahŕňajúca parameter tvaru a mierky namiesto parametrov tvaru a rýchlosti.. Default: `false`.
* __step__ | `(number|string)`: veľkosť kroku rolovacieho vstupu. Default: `0.01`.
* __symbols__ | `boolean`: či sa majú pre parametre zobrazovať grécke symboly. Default: `true`.
* __tabs__ | `array<string>`: ktoré záložky sa majú zobraziť (buď `menšie`, `veľšie` alebo `rozsah`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<LearnGammaDistribution />
```

