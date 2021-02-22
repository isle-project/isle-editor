---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

关于群体平均数的假设检验的学习内容。

## 选项

* __types__ | `array<string>`: 测试的类型("一个样本"，"两个样本")，小组件应该暴露出来。. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: 小组件暴露的测试对象. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: 始终将零假设显示为一个单一的值。. Default: `false`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<LearnMeanTest />
```

