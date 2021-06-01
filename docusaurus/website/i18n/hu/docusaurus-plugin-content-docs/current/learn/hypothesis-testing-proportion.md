---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Tanulási komponens a hipotézisvizsgálatokról a populáció arányára vonatkozóan.

## Opciók

* __types__ | `array<string>`: a teszt típusa(i) (`One-Sample`, `Two-Sample`), amelyet a widgetnek ki kell tennie.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: mindig egyetlen értékként jeleníti meg a nullhipotézist. Default: `false`.
* __pValue__ | `string`: egyéni címke a p-értékhez (legyen egy LaTeX egyenlet karakterlánc). Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<LearnProportionTest />
```

