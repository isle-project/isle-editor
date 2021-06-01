---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

En læringskomponent, der illustrerer den centrale grænsesætning (CLT) for en valgt kontinuert fordeling.

## Indstillinger

* __distributions__ | `array<string>`: statistiske fordelinger at vælge imellem ("ensartet", "eksponentiel" og/eller "normal"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: en række tal eller et enkelt tal, der angiver de stikprøvestørrelser, der kan udtages. Default: `25`.
* __hideFormulas__ | `boolean`: styrer, om formler skal skjules i komponentens tekst. Default: `false`.


## Eksempler

```jsx live
<LearnContinuousCLT />
```

