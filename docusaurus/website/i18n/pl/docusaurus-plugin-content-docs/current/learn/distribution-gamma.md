---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

Komponent edukacyjny do obliczania prawdopodobieństwa rozkładu gamma.

## Opcje

* __domain__ | `object`: obiekt tablicy `x` i `y` z punktem początkowym i końcowym dla danej osi. Default: `none`.
* __scaleParameterization__ | `boolean`: kontroluje, czy należy stosować parametryzację obejmującą parametr kształtu i skali zamiast kształtu i prędkości. Default: `false`.
* __step__ | `(number|string)`: wielkość kroku wejścia przewijania. Default: `0.01`.
* __symbols__ | `boolean`: czy wyświetlać greckie symbole dla parametrów. Default: `true`.
* __tabs__ | `array<string>`: które zakładki mają być wyświetlane (albo `małe`, `większe`, albo `zakresowe`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<LearnGammaDistribution />
```

