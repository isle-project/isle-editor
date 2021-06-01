---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Mokomasis komponentas, iliustruojantis centrinę ribinę teoremą (CLT) pasirinktam tolydžiam pasiskirstymui.

## Parinktys

* __distributions__ | `array<string>`: pasirinkti statistinius skirstinius ("tolygus", "eksponentinis" ir (arba) "normalus").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: skaičių masyvą arba vieną skaičių, žymintį imties dydžius, kuriuos galima sudaryti.. Default: `25`.
* __hideFormulas__ | `boolean`: kontroliuoja, ar paslėpti formules komponento tekste.. Default: `false`.


## Pavyzdžiai

```jsx live
<LearnContinuousCLT />
```

