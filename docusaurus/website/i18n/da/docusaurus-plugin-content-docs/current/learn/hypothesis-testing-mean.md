---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

En læringskomponent om hypotesetest for en befolknings middelværdi.

## Indstillinger

* __types__ | `array<string>`: den eller de testtyper (`En prøve`, `To prøver`), som widget'en skal udstille. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: den eller de test, som widget'en udstiller. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: altid vise nulhypotesen som en enkelt værdi. Default: `false`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `false`.
* __pValue__ | `string`: brugerdefineret betegnelse for p-værdien (skal være en LaTeX-ligningsstreng). Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<LearnMeanTest />
```

