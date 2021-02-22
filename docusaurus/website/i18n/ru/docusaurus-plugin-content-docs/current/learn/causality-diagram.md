---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Учебный компонент, иллюстрирующий влияние путаницы при оценке причинно-следственной связи между двумя переменными и рандомизации.

## Варианты

* __x__ | `(string|node)`: имя объясняющей переменной. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: имя ответной переменной. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: имя путающей переменной. Default: `'Parental Myopia'`.


## Примеры

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

