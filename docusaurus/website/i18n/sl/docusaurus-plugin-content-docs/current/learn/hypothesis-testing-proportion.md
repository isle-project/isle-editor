---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Učna komponenta o testiranju hipotez za delež populacije.

## Možnosti

* __types__ | `array<string>`: vrsta(-e) testa (`One-Sample`, `Two-Sample`), ki naj bi ga widget prikazal. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: ničelno hipotezo vedno prikaže kot eno vrednost.. Default: `false`.
* __pValue__ | `string`: oznaka po meri za p-vrednost (mora biti niz enačb LaTeX).. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<LearnProportionTest />
```

