---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Una componente di apprendimento sui test di ipotesi per una media di popolazione.

## Opzioni

* __types__ | `array<string>`: il tipo o i tipi di test (`One-Sample`, `Two-Sample`) che il widget dovrebbe esporre. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: il test o i test esposti dal widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: visualizzare sempre l'ipotesi nulla come un unico valore. Default: `false`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

```jsx live
<LearnMeanTest />
```

