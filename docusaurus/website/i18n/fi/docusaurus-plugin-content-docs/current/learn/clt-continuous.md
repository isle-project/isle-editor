---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Oppimiskomponentti, joka havainnollistaa CLT-teoremin (Central Limit Theorem) valitulle jatkuvalle jakaumalle.

## Vaihtoehdot

* __distributions__ | `array<string>`: valittavissa olevat tilastolliset jakaumat ("tasainen", "eksponentiaalinen" ja/tai "normaali").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: numerosarja tai yksittäinen numero, joka ilmaisee otoskokoja, jotka voidaan ottaa.. Default: `25`.
* __hideFormulas__ | `boolean`: ohjaa, piilotetaanko kaavat komponentin tekstissä.. Default: `false`.


## Esimerkkejä

```jsx live
<LearnContinuousCLT />
```

