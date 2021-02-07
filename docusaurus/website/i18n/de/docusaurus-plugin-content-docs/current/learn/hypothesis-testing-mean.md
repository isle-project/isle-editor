---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Eine Lernkomponente zu Hypothesentests für einen Populationsmittelwert.

## Options

* __types__ | `array<string>`: die Art(en) des Tests (`Eine-Stichprobe`, `Zwei-Stichprobe`), die das Widget darstellen soll. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: der/die Test(e), der/die vom Widget ausgesetzt wird/werden. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: die Nullhypothese immer als Einzelwert anzeigen. Default: `false`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<LearnMeanTest />
```

