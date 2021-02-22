---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Komponent uczący się ilustrujący wpływ zagmatwanej zmiennej podczas oceny związku przyczynowego między dwiema zmiennymi oraz randomizacji.

## Opcje

* __x__ | `(string|node)`: nazwa zmiennej objaśniającej. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: nazwa zmiennej odpowiedzi. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: nazwa zmiennej mylącej. Default: `'Parental Myopia'`.


## Przykłady

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

