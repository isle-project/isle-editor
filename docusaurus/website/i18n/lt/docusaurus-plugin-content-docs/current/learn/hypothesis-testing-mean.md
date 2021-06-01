---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Mokymosi komponentas apie populiacijos vidurkio hipotezės testus.

## Parinktys

* __types__ | `array<string>`: testo tipą (-us) (`Viena imtis`, `Dvi imtys`), kurį (-iuos) turėtų rodyti valdiklis. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: testas (-ai), kurį (-iuos) pateikia valdiklis. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: nulinę hipotezę visada rodykite kaip vieną reikšmę.. Default: `false`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `false`.
* __pValue__ | `string`: pasirinktinė p reikšmės etiketė (turėtų būti LaTeX lygties eilutė).. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<LearnMeanTest />
```

