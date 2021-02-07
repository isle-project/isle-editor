---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Eine Lernkomponente zur Veranschaulichung des Einflusses einer Confounding-Variable bei der Beurteilung einer kausalen Beziehung zwischen zwei Variablen und der Randomisierung.

## Options

* __x__ | `(string|node)`: Name der erklärenden Variable. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: Name der Antwortvariable. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: Name der störanfälligen Variablen. Default: `'Parental Myopia'`.


## Examples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

