---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

在评估两个变量和随机化的因果关系时，说明混杂变量影响的学习内容。

## 选项

* __x__ | `(string|node)`: 解释变量名称. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: 响应变量名. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: 混淆变量名称. Default: `'Parental Myopia'`.


## 例子

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

