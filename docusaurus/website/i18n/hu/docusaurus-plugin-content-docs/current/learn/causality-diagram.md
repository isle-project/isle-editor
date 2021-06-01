---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Egy tanulási komponens, amely a zavaró változó hatását szemlélteti a két változó közötti oksági kapcsolat és a randomizáció értékelésénél.

## Opciók

* __x__ | `(string|node)`: a magyarázó változó neve. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: a válaszváltozó neve. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: a zavaró változó neve. Default: `'Parental Myopia'`.


## Példák

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

