---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Oppimiskomponentti hypoteesitesteistä populaation osuutta varten.

## Vaihtoehdot

* __types__ | `array<string>`: testityyppi(t) (`Yksi otos`, `Kaksi otosta`), joka widgetin tulisi esittää.. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: näyttää nollahypoteesin aina yhtenä arvona.. Default: `false`.
* __pValue__ | `string`: p-arvon mukautettu merkintä (sen pitäisi olla LaTeX-yhtälön merkkijono).. Default: `none`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

```jsx live
<LearnProportionTest />
```

