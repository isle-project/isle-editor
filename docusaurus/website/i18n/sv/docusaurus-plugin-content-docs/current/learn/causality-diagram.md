---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

En inlärningskomponent som illustrerar effekten av en störande variabel när man bedömer ett orsakssamband mellan två variabler och av randomisering.

## Alternativ

* __x__ | `(string|node)`: Namn på förklarande variabel.. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: Namn på svarsvariabeln.. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: Namn på den störande variabeln.. Default: `'Parental Myopia'`.


## Exempel

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

