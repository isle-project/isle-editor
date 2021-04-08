---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Eine Lernkomponente zu Hypothesentests für einen Bevölkerungsanteil.

## Optionen

* __types__ | `array<string>`: die Art(en) des Tests (`Eine-Stichprobe`, `Zwei-Stichprobe`), die das Widget darstellen soll. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: die Nullhypothese immer als Einzelwert anzeigen. Default: `false`.
* __pValue__ | `string`: benutzerdefinierte Beschriftung für den p-Wert (sollte eine LaTeX-Gleichungszeichenfolge sein). Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

```jsx live
<LearnProportionTest />
```

