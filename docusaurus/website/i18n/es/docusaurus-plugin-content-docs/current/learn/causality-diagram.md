---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Un componente de aprendizaje que ilustra el impacto de una variable de confusión cuando se evalúa una relación causal entre dos variables y de la aleatoriedad.

## Options

* __x__ | `(string|node)`: nombre de la variable explicativa. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: nombre de la variable de respuesta. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: nombre de la variable de confusión. Default: `'Parental Myopia'`.


## Examples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

