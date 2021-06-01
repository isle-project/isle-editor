---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Õppekomponent, mis illustreerib valitud pideva jaotuse jaoks keskmist piirväärtuste teoreemi (CLT).

## Valikud

* __distributions__ | `array<string>`: statistilised jaotused, mille vahel valida ("ühtlane", "eksponentsiaalne" ja/või "normaalne").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: numbrite massiivi või üksikuid numbreid, mis tähistavad valimi suurust, mida saab võtta.. Default: `25`.
* __hideFormulas__ | `boolean`: kontrollib, kas valemite peitmine komponendi tekstis on võimalik.. Default: `false`.


## Näited

```jsx live
<LearnContinuousCLT />
```

