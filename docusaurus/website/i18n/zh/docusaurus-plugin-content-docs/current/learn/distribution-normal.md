---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

一个用于计算正态分布概率的学习组件。

## Options

* __domain__ | `object`: `x`和`y`数组的对象，其各自轴的起点和终点。. Default: `none`.
* __hideCDF__ | `boolean`: 控制是否隐藏CDF图. Default: `false`.
* __minStDev__ | `number`: 最小标准差. Default: `1`.
* __step__ | `(number|string)`: 滚动输入的步长. Default: `0.01`.
* __tabs__ | `array<string>`: 显示哪些标签页（可以是 "小"、"大 "或 "范围"）。. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<LearnNormalDistribution />
```

