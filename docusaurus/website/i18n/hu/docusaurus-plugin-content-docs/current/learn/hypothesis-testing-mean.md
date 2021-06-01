---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Tanulási komponens a populáció átlagára vonatkozó hipotézisvizsgálatokról.

## Opciók

* __types__ | `array<string>`: a teszt típusa(i) (`One-Sample`, `Two-Sample`), amelyet a widgetnek ki kell tennie.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: a widget által kiállított teszt(ek). Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: mindig egyetlen értékként jeleníti meg a nullhipotézist. Default: `false`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `false`.
* __pValue__ | `string`: egyéni címke a p-értékhez (legyen egy LaTeX egyenlet karakterlánc). Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<LearnMeanTest />
```

