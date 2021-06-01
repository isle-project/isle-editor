---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Õppekomponent hüpoteeside testimise kohta populatsiooni keskmise kohta.

## Valikud

* __types__ | `array<string>`: testi tüüp(id) (ühe valimi test, kahe valimi test), mida vidin peaks avaldama.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: vidinaga kokkupuutuv(ad) test(id). Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: kuvab nullhüpoteesi alati ühe väärtusena. Default: `false`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `false`.
* __pValue__ | `string`: p-väärtuse kohandatud silt (peaks olema LaTeXi võrrandistring). Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<LearnMeanTest />
```

