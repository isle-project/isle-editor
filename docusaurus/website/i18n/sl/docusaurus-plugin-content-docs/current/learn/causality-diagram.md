---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Učna komponenta, ki ponazarja vpliv moteče spremenljivke pri ocenjevanju vzročne zveze med dvema spremenljivkama in naključnega izbora.

## Možnosti

* __x__ | `(string|node)`: ime pojasnjevalne spremenljivke. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: ime spremenljivke odziva. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: ime spremenljivke, ki povzroča zmedo. Default: `'Parental Myopia'`.


## Primeri

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

