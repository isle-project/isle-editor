---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

A learning component illustrating the impact of a confounding variable when assessing a causal relationship between two variables and of randomization.

## Examples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

## Options

* __x__ | `(string|node)`: name of explanatory variable. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: name of response variable. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: name of confounding variable. Default: `'Parental Myopia'`.
