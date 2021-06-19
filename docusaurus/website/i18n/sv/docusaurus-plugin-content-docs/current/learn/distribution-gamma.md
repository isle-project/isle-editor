---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

En inlärningskomponent för beräkning av sannolikheter för en gammafördelning.

## Alternativ

* __domain__ | `object`: objekt av matriserna `x` och `y` med start- och slutpunkterna för respektive axel.. Default: `none`.
* __scaleParameterization__ | `boolean`: Kontrollerar om parametrisering med en form- och skalparameter ska användas i stället för form och hastighet.. Default: `false`.
* __step__ | `(number|string)`: stegstorlek för rullningsinmatningen. Default: `0.01`.
* __symbols__ | `boolean`: Om grekiska symboler ska visas för parametrar.. Default: `true`.
* __tabs__ | `array<string>`: vilka flikar som ska visas (antingen `less`, `greater` eller "intervall").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<LearnGammaDistribution />
```

