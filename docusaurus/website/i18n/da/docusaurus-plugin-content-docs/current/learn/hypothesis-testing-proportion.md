---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

En læringskomponent om hypotesetest for en befolkningsandel.

## Indstillinger

* __types__ | `array<string>`: den eller de testtyper (`En prøve`, `To prøver`), som widget'en skal udstille. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: altid vise nulhypotesen som en enkelt værdi. Default: `false`.
* __pValue__ | `string`: brugerdefineret betegnelse for p-værdien (skal være en LaTeX-ligningsstreng). Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<LearnProportionTest />
```

