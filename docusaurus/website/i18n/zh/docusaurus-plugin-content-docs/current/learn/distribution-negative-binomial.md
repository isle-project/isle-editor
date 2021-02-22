---
id: distribution-negative-binomial
title: Negative Binomial Distribution
sidebar_label: Negative Binomial Distribution
---

一个用于计算负二项分布概率的学习组件。

## 选项

* __countTrials__ | `boolean`: 设为true，如果不计算失败次数，而是将负二项分布的随机变量定义为直到第r次成功的试验次数，则设为true。. Default: `false`.
* __step__ | `(number|string)`: 滚动输入的步长. Default: `0.01`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<LearnNegativeBinomialDistribution />
```

