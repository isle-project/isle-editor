---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Vzdelávacia zložka o testoch hypotéz pre podiel populácie.

## Možnosti

* __types__ | `array<string>`: typ(y) testu (`Jedna vzorka`, `Dve vzorky`), ktorý by mal widget vystaviť. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: vždy zobrazí nulovú hypotézu ako jednu hodnotu. Default: `false`.
* __pValue__ | `string`: vlastné označenie p-hodnoty (mal by to byť reťazec rovníc LaTeXu). Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<LearnProportionTest />
```

