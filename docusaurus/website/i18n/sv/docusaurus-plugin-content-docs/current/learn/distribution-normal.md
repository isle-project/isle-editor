---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

En inlärningskomponent för beräkning av sannolikheter i en normalfördelning.

## Alternativ

* __domain__ | `object`: objekt av matriserna `x` och `y` med start- och slutpunkterna för respektive axel.. Default: `none`.
* __hideCDF__ | `boolean`: kontrollerar om CDF-ritningarna ska döljas. Default: `false`.
* __minStDev__ | `number`: Minsta standardavvikelse.. Default: `1`.
* __step__ | `(number|string)`: stegstorlek för rullningsinmatningen. Default: `0.01`.
* __tabs__ | `array<string>`: vilka flikar som ska visas (antingen `less`, `greater` eller "intervall").. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<LearnNormalDistribution />
```

