---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Egy tanulási komponens, amely a központi határértéktételt (CLT) szemlélteti egy kiválasztott folytonos eloszlásra.

## Opciók

* __distributions__ | `array<string>`: statisztikai eloszlások közül választhat ("egyenletes", "exponenciális" és/vagy "normál"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: számok tömbje vagy egyetlen szám, amely a kisorsolható mintanagyságokat jelöli.. Default: `25`.
* __hideFormulas__ | `boolean`: szabályozza, hogy a képleteket elrejtse-e a komponens szövegében. Default: `false`.


## Példák

```jsx live
<LearnContinuousCLT />
```

