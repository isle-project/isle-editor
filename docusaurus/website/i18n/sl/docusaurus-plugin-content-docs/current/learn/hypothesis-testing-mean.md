---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Učna komponenta o testiranju hipotez za populacijsko povprečje.

## Možnosti

* __types__ | `array<string>`: vrsta(-e) testa (`One-Sample`, `Two-Sample`), ki ga mora prikazati gradnik. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: test(-e), ki ga(-e) prikazuje gradnik.. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: ničelno hipotezo vedno prikaže kot eno vrednost.. Default: `false`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `false`.
* __pValue__ | `string`: oznaka po meri za p-vrednost (mora biti niz enačb LaTeX).. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<LearnMeanTest />
```

