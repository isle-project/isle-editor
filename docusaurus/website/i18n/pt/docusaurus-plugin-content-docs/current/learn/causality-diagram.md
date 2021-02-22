---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

Um componente de aprendizagem que ilustra o impacto de uma variável confusa ao avaliar uma relação causal entre duas variáveis e de aleatorização.

## Opções

* __x__ | `(string|node)`: nome da variável explicativa. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: nome da variável de resposta. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: nome da variável confundidora. Default: `'Parental Myopia'`.


## Exemplos

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

