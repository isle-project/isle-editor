---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Výučbová zložka ilustrujúca centrálnu limitnú vetu (CLT) pre zvolené spojité rozdelenie.

## Možnosti

* __distributions__ | `array<string>`: štatistické rozdelenia na výber ("rovnomerné", "exponenciálne" a/alebo "normálne"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: pole čísel alebo jedno číslo označujúce veľkosti vzoriek, ktoré je možné vybrať. Default: `25`.
* __hideFormulas__ | `boolean`: kontroluje, či sa majú v texte komponentu skryť vzorce.. Default: `false`.


## Príklady

```jsx live
<LearnContinuousCLT />
```

