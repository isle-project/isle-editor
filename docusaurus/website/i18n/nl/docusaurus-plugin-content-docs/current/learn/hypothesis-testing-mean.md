---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Een leercomponent op hypothesetests voor een populatie betekenen.

## Opties

* __types__ | `array<string>`: het (de) type(n) test (`One-Sample`, `Two-Sample`) dat de widget moet blootleggen. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: de test(s) die door de widget worden blootgelegd. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: de nulhypothese altijd als een enkele waarde weergeven. Default: `false`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `false`.
* __pValue__ | `string`: aangepast label voor de p-waarde (moet een LaTeX-vergelijkingsteken zijn). Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<LearnMeanTest />
```

