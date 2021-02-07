---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Una componente di apprendimento che illustra l'impatto di una variabile confondente nella valutazione di una relazione causale tra due variabili e della randomizzazione.

## Options

* __x__ | `(string|node)`: nome della variabile esplicativa. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: nome della variabile di risposta. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: nome della variabile confondente. Default: `'Parental Myopia'`.


## Examples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

