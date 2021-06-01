---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Mokymosi komponentas, skirtas hipotezių apie populiacijos proporcijas tikrinimui.

## Parinktys

* __types__ | `array<string>`: testo tipą (-us) (`Viena imtis`, `Dvi imtys`), kurį (-iuos) turėtų rodyti valdiklis. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: nulinę hipotezę visada rodykite kaip vieną reikšmę.. Default: `false`.
* __pValue__ | `string`: pasirinktinė p reikšmės etiketė (turėtų būti LaTeX lygties eilutė).. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<LearnProportionTest />
```

