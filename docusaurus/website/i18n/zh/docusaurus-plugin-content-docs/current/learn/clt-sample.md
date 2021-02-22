---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

当从提供的数据集中取样时，说明中心极限定理（CLT）的学习组件。

## 选项

* __data__ | `object (required)`: 数据对象的键对应于变量名，值对应于各自变量的值。. Default: `none`.
* __hidePopulationStdev__ | `boolean`: 隐藏显示人口标准差. Default: `false`.
* __samples__ | `(array<number>|number)`: 数组数字或单个数字，表示可以抽取的样本量。. Default: `25`.
* __populationProbabilities__ | `boolean`: 是否显示人口概率的计算公式？. Default: `false`.
* __quantiles__ | `boolean`: 是否显示计算任何量子值的工具？. Default: `false`.
* __variables__ | `array (required)`: 变量的名称，可以从下列变量中取样。. Default: `none`.


## 例子

```jsx live
<LearnSampleCLT />
```

