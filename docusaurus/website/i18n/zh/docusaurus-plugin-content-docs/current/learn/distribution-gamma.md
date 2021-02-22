---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

一个用于计算伽马分布概率的学习组件。

## 选项

* __domain__ | `object`: `x`和`y`数组的对象，其各自轴的起点和终点。. Default: `none`.
* __scaleParameterization__ | `boolean`: 控制是否使用涉及形状和比例参数的参数化，而不是形状和速率。. Default: `false`.
* __step__ | `(number|string)`: 滚动输入的步长. Default: `0.01`.
* __symbols__ | `boolean`: 是否显示参数的希腊语符号. Default: `true`.
* __tabs__ | `array<string>`: 显示哪些标签页（可以是 "小"、"大 "或 "范围"）。. Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<LearnGammaDistribution />
```

