---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Komponent do nauki na testach hipotez dla średniej populacji.

## Opcje

* __types__ | `array<string>`: typ(-y) badania (`Jedna Próbka`, `Dwie Próbki`), które widżet powinien eksponować. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: test(-y) odsłonięty(-e) przez widżet. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: zawsze wyświetlać hipotezę zerową jako pojedynczą wartość. Default: `false`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `false`.
* __pValue__ | `string`: własna etykieta dla wartości p (powinna być ciągiem równań LaTeX). Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<LearnMeanTest />
```

