---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

En læringskomponent, der illustrerer virkningen af en forvirrende variabel ved vurdering af en årsagssammenhæng mellem to variabler og af randomisering.

## Indstillinger

* __x__ | `(string|node)`: navnet på den forklarende variabel. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: navnet på svarvariablen. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: navnet på den forstyrrende variabel. Default: `'Parental Myopia'`.


## Eksempler

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

