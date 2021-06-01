---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

O componentă de învățare care ilustrează impactul unei variabile de confuzie atunci când se evaluează o relație de cauzalitate între două variabile și al randomizării.

## Opțiuni

* __x__ | `(string|node)`: denumirea variabilei explicative. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: denumirea variabilei de răspuns. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: denumirea variabilei de confuzie. Default: `'Parental Myopia'`.


## Exemple

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

