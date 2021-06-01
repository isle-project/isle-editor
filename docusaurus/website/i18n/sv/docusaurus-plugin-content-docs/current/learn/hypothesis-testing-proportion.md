---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

En inlärningskomponent om hypotesprövning av en befolkningsandel.

## Alternativ

* __types__ | `array<string>`: den eller de testtyper (`One-Sample`, `Two-Sample`) som widgeten ska visa.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: alltid visa nollhypotesen som ett enda värde. Default: `false`.
* __pValue__ | `string`: egen etikett för p-värdet (bör vara en LaTeX-ekvationssträng). Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<LearnProportionTest />
```

