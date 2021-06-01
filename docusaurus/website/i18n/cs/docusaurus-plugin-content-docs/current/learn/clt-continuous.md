---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Výuková komponenta ilustrující centrální limitní větu (CLT) pro zvolené spojité rozdělení.

## Možnosti

* __distributions__ | `array<string>`: statistická rozdělení, z nichž si můžete vybrat ("rovnoměrné", "exponenciální" a/nebo "normální").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: pole čísel nebo jednotlivá čísla označující velikosti vzorků, které lze vybírat.. Default: `25`.
* __hideFormulas__ | `boolean`: řídí, zda se mají v textu komponenty skrývat vzorce.. Default: `false`.


## Příklady

```jsx live
<LearnContinuousCLT />
```

