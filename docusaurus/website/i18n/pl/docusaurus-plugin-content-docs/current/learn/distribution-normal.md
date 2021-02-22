---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

Komponent edukacyjny do obliczania prawdopodobieństwa rozkładu normalnego.

## Opcje

* __domain__ | `object`: obiekt tablicy `x` i `y` z punktem początkowym i końcowym dla danej osi. Default: `none`.
* __hideCDF__ | `boolean`: kontroluje, czy należy ukryć działki CDF. Default: `false`.
* __minStDev__ | `number`: minimalne odchylenie standardowe. Default: `1`.
* __step__ | `(number|string)`: wielkość kroku wejścia przewijania. Default: `0.01`.
* __tabs__ | `array<string>`: które zakładki mają być wyświetlane (albo `małe`, `większe`, albo `zakresowe`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<LearnNormalDistribution />
```

