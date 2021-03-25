---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Eine Lernkomponente zur Veranschaulichung des zentralen Grenzwertsatzes (CLT) für eine ausgewählte stetige Verteilung.

## Optionen

* __distributions__ | `array<string>`: Statistische Verteilungen zur Auswahl ("gleichmäßig", "exponentiell" und/oder "normal"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: undefined. Default: `25`.
* __hideFormulas__ | `boolean`: steuert, ob Formeln im Komponententext ausgeblendet werden sollen. Default: `false`.


## Beispiele

```jsx live
<LearnContinuousCLT />
```

