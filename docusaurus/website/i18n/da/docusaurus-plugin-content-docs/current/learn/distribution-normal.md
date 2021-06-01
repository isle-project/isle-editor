---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

En læringskomponent til beregning af sandsynligheder for en normalfordeling.

## Indstillinger

* __domain__ | `object`: objekt af `x` og `y` arrays med start- og slutpunkterne for de respektive akser. Default: `none`.
* __hideCDF__ | `boolean`: styrer, om CDF-plotterne skal skjules. Default: `false`.
* __minStDev__ | `number`: mindste standardafvigelse. Default: `1`.
* __step__ | `(number|string)`: trinstørrelse for rulleindgangen. Default: `0.01`.
* __tabs__ | `array<string>`: hvilke faner der skal vises (enten `smaller`, `stor`, `stor` eller `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<LearnNormalDistribution />
```

