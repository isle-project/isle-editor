---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Vzdelávacia zložka o testoch hypotéz pre populačný priemer.

## Možnosti

* __types__ | `array<string>`: typ(y) testu (`Jedna vzorka`, `Dve vzorky`), ktorý by mal widget vystaviť. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: test(y) vystavený(é) widgetom. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: vždy zobrazí nulovú hypotézu ako jednu hodnotu. Default: `false`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `false`.
* __pValue__ | `string`: vlastné označenie p-hodnoty (mal by to byť reťazec rovníc LaTeXu). Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<LearnMeanTest />
```

