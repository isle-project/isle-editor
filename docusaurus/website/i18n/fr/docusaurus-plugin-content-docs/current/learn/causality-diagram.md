---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Un élément d'apprentissage illustrant l'impact d'une variable confondante lors de l'évaluation d'une relation causale entre deux variables et de la randomisation.

## Options

* __x__ | `(string|node)`: nom de la variable explicative. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: nom de la variable de réponse. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: nom de la variable confondante. Default: `'Parental Myopia'`.


## Exemples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

