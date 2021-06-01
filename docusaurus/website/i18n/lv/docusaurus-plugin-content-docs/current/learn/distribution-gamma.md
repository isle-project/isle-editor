---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Mācību komponents gamma sadalījuma varbūtību aprēķināšanai.

## Iespējas

* __domain__ | `object`: `x` un `y` masīvu objekts ar attiecīgās ass sākuma un beigu punktu.. Default: `none`.
* __scaleParameterization__ | `boolean`: kontrolē, vai izmantot parametrizāciju, kas ietver formas un mēroga parametru, nevis formas un ātruma parametru.. Default: `false`.
* __step__ | `(number|string)`: ritināšanas ieejas soļa lielums. Default: `0.01`.
* __symbols__ | `boolean`: vai parametriem attēlot grieķu simbolus. Default: `true`.
* __tabs__ | `array<string>`: kuras cilnes rādīt (`mazāka`, `lielāka` vai `dažāda`).. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

```jsx live
<LearnGammaDistribution />
```

