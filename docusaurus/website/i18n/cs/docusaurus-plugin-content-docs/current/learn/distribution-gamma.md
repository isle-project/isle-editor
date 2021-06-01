---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Výuková komponenta pro výpočet pravděpodobností gama rozdělení.

## Možnosti

* __domain__ | `object`: objekt polí `x` a `y` s počátečním a koncovým bodem příslušné osy.. Default: `none`.
* __scaleParameterization__ | `boolean`: určuje, zda se má použít parametrizace zahrnující parametr tvaru a měřítka místo parametrů tvaru a míry.. Default: `false`.
* __step__ | `(number|string)`: velikost kroku posuvného vstupu. Default: `0.01`.
* __symbols__ | `boolean`: zda zobrazovat řecké symboly pro parametry. Default: `true`.
* __tabs__ | `array<string>`: které karty se mají zobrazit (buď `menší`, `větší`, nebo `rozsah`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<LearnGammaDistribution />
```

