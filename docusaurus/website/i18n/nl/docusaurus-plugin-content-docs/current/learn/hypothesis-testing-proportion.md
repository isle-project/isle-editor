---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Een leercomponent op hypothesetests voor een deel van de bevolking.

## Opties

* __types__ | `array<string>`: het (de) type(n) test (`One-Sample`, `Two-Sample`) dat de widget moet blootleggen. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: de nulhypothese altijd als een enkele waarde weergeven. Default: `false`.
* __pValue__ | `string`: aangepast label voor de p-waarde (moet een LaTeX-vergelijkingsteken zijn). Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<LearnProportionTest />
```

