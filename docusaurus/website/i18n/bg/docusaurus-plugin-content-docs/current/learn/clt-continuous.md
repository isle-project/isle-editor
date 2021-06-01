---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

Учебен компонент, илюстриращ Централната гранична теорема (ЦГТ) за избрано непрекъснато разпределение.

## Опции

* __distributions__ | `array<string>`: статистически разпределения, от които да избирате ("равномерно", "експоненциално" и/или "нормално").. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: масив от числа или единично число, обозначаващо размерите на извадките, които могат да бъдат направени. Default: `25`.
* __hideFormulas__ | `boolean`: контролира дали да се скрият формулите в текста на компонента. Default: `false`.


## Примери

```jsx live
<LearnContinuousCLT />
```

