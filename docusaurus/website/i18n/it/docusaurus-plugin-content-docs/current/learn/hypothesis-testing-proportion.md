---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Una componente di apprendimento su test di ipotesi per una percentuale di popolazione.

## Opzioni

* __types__ | `array<string>`: il tipo o i tipi di test (`One-Sample`, `Two-Sample`) che il widget dovrebbe esporre. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: visualizzare sempre l'ipotesi nulla come un unico valore. Default: `false`.
* __pValue__ | `string`: etichetta personalizzata per il valore p (dovrebbe essere una stringa di equazione LaTeX). Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

```jsx live
<LearnProportionTest />
```

