---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

Un volet d'apprentissage sur les tests d'hypothèse pour une moyenne de population.

## Options

* __types__ | `array<string>`: le(s) type(s) de test ("One-Sample", "Two-Sample") que le widget doit exposer. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: le(s) test(s) exposé(s) par le widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: toujours afficher l'hypothèse nulle comme une valeur unique. Default: `false`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `false`.
* __pValue__ | `string`: étiquette personnalisée pour la valeur p (devrait être une chaîne d'équation LaTeX). Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

```jsx live
<LearnMeanTest />
```

