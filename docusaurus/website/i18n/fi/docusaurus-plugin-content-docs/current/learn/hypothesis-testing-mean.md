---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Oppimiskomponentti, joka koskee populaation keskiarvon hypoteesitestejä.

## Vaihtoehdot

* __types__ | `array<string>`: testityyppi(t) (`Yksi otos`, `Kaksi otosta`), joka widgetin tulisi esittää.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: testit, jotka widgetin avulla voidaan suorittaa.. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: näyttää nollahypoteesin aina yhtenä arvona.. Default: `false`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `false`.
* __pValue__ | `string`: p-arvon mukautettu merkintä (sen pitäisi olla LaTeX-yhtälön merkkijono).. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<LearnMeanTest />
```

