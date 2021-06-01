---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Učna komponenta, ki ponazarja osrednji mejni stavek (CLT) za izbrano zvezno porazdelitev.

## Možnosti

* __distributions__ | `array<string>`: statistične porazdelitve na izbiro ("enakomerna", "eksponentna" in/ali "normalna").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: polje številk ali ena sama številka, ki označuje velikost vzorca, ki ga je mogoče sestaviti.. Default: `25`.
* __hideFormulas__ | `boolean`: nadzoruje, ali naj se skrijejo formule v besedilu komponente.. Default: `false`.


## Primeri

```jsx live
<LearnContinuousCLT />
```

