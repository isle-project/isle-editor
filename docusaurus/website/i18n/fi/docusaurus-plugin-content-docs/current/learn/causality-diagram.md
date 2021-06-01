---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Oppimiskomponentti, joka havainnollistaa sekoittavan muuttujan vaikutusta arvioitaessa kahden muuttujan välistä kausaalisuhdetta ja satunnaistamista.

## Vaihtoehdot

* __x__ | `(string|node)`: selittävän muuttujan nimi. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: vastausmuuttujan nimi. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: sekoittavan muuttujan nimi. Default: `'Parental Myopia'`.


## Esimerkkejä

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

