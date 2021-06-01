---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

En inlärningskomponent som illustrerar den centrala gränssatsen (CLT) för en vald kontinuerlig fördelning.

## Alternativ

* __distributions__ | `array<string>`: Statistiska fördelningar att välja mellan ("enhetlig", "exponentiell" och/eller "normal").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: en rad siffror eller en enda siffra som anger de urvalsstorlekar som kan dras.. Default: `25`.
* __hideFormulas__ | `boolean`: styr om formlerna ska döljas i komponenttexten.. Default: `false`.


## Exempel

```jsx live
<LearnContinuousCLT />
```

