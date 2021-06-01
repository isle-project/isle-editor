---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Õppekomponent hüpoteeside testide kohta populatsiooni osakaalu kohta.

## Valikud

* __types__ | `array<string>`: testi tüüp(id) (ühe valimi test, kahe valimi test), mida vidin peaks avaldama.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: kuvab nullhüpoteesi alati ühe väärtusena. Default: `false`.
* __pValue__ | `string`: p-väärtuse kohandatud silt (peaks olema LaTeXi võrrandistring). Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<LearnProportionTest />
```

