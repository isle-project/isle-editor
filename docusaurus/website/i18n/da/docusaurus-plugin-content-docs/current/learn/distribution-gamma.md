---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

En læringskomponent til beregning af sandsynligheder for en gammafordeling.

## Indstillinger

* __domain__ | `object`: objekt af `x` og `y` arrays med start- og slutpunkterne for de respektive akser. Default: `none`.
* __scaleParameterization__ | `boolean`: styrer, om der skal anvendes parameterisering med en parameter for form og skala i stedet for form og hastighed. Default: `false`.
* __step__ | `(number|string)`: trinstørrelse for rulleindgangen. Default: `0.01`.
* __symbols__ | `boolean`: om der skal vises græske symboler for parametre. Default: `true`.
* __tabs__ | `array<string>`: hvilke faner der skal vises (enten `smaller`, `stor`, `stor` eller `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<LearnGammaDistribution />
```

