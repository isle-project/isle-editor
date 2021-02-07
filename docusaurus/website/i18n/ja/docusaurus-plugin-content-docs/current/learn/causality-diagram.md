---
id: causality-diagram
title: Causality Diagram
sidebar_label: Causality Diagram
---

2つの変数間の因果関係とランダム化の因果関係を評価する際の交絡変数の影響を説明する学習コンポーネント。

## Options

* __x__ | `(string|node)`: 説明変数名. Default: `'Lights at Night'`.
* __y__ | `(string|node)`: レスポンス変数名. Default: `'Child Myopia'`.
* __z__ | `(string|node)`: 交絡変数名. Default: `'Parental Myopia'`.


## Examples

```jsx live
<LearnCausalityDiagram x="X" y="Y" z="Z" />
```

