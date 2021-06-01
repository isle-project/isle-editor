---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Учебен компонент, илюстриращ влиянието на объркващата променлива при оценка на причинно-следствената връзка между две променливи и на рандомизацията.

## Опции

* __x__ | `(string|node)`: наименование на обяснителната променлива. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: име на променливата на отговора. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: име на объркващата променлива. Default: `'Parental Myopia'`.


## Примери

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

