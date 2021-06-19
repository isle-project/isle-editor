---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Výuková komponenta pro výpočet pravděpodobností normálního rozdělení.

## Možnosti

* __domain__ | `object`: objekt polí `x` a `y` s počátečním a koncovým bodem příslušné osy.. Default: `none`.
* __hideCDF__ | `boolean`: řídí, zda se mají skrýt grafy CDF. Default: `false`.
* __minStDev__ | `number`: minimální směrodatná odchylka. Default: `1`.
* __step__ | `(number|string)`: velikost kroku posuvného vstupu. Default: `0.01`.
* __tabs__ | `array<string>`: které karty se mají zobrazit (buď `less`, `greater`, nebo `rozsah`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<LearnNormalDistribution />
```

