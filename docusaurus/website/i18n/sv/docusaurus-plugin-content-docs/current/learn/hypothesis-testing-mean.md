---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

En inlärningskomponent om hypotesprövning av ett populationsmedelvärde.

## Alternativ

* __types__ | `array<string>`: den eller de testtyper (`One-Sample`, `Two-Sample`) som widgeten ska visa.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: det eller de test som visas av widgeten. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: alltid visa nollhypotesen som ett enda värde. Default: `false`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `false`.
* __pValue__ | `string`: egen etikett för p-värdet (bör vara en LaTeX-ekvationssträng). Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<LearnMeanTest />
```

