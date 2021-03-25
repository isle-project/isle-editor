---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

一个学习组件，说明一个选定的连续分布的中心极限定理（CLT）。

## 选项

* __distributions__ | `array<string>`: 可供选择的统计分布（"均匀"、"指数 "和/或 "正态"）。. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: 数组数字或单个数字，表示可以抽取的样本量。. Default: `25`.
* __hideFormulas__ | `boolean`: 控制是否隐藏组件文本中的公式。. Default: `false`.


## 例子

```jsx live
<LearnContinuousCLT />
```

