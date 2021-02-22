---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Een leercomponent die de impact van een verwarrende variabele illustreert bij de beoordeling van een causaal verband tussen twee variabelen en van randomisatie.

## Opties

* __x__ | `(string|node)`: naam van de verklarende variabele. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: naam van de responsvariabele. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: naam van verwarrende variabele. Default: `'Parental Myopia'`.


## Voorbeelden

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

