---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

O componentă de învățare care ilustrează Teorema limitei centrale (CLT) pentru o distribuție continuă aleasă.

## Opțiuni

* __distributions__ | `array<string>`: distribuții statistice din care să alegeți ("uniformă", "exponențială" și/sau "normală"). Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: matrice de numere sau un singur număr care denotă dimensiunile eșantionului care poate fi extras. Default: `25`.
* __hideFormulas__ | `boolean`: controlează dacă se vor ascunde formulele în textul componentei. Default: `false`.


## Exemple

```jsx live
<LearnContinuousCLT />
```

