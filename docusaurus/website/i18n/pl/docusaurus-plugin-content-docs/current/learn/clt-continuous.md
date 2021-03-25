---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Komponent edukacyjny ilustrujący Twierdzenie Centralnej Granicy (CLT) dla wybranej dystrybucji ciągłej.

## Opcje

* __distributions__ | `array<string>`: rozkłady statystyczne do wyboru ("jednolite", "wykładnicze" i/lub "normalne"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: undefined. Default: `25`.
* __hideFormulas__ | `boolean`: kontroluje, czy należy ukrywać formuły w tekście składnika. Default: `false`.


## Przykłady

```jsx live
<LearnContinuousCLT />
```

