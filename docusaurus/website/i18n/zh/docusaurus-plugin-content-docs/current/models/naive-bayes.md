---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes假设给定的类成员的预测因子遵循正态分布。

## Options

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `string (required)`: 结果变量. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一个或多个预测变量. Default: `none`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __omitMissing__ | `boolean`: 控制是否省略缺失值. Default: `false`.
* __onPredict__ | `function`: 模型拟合后，调用回调来处理预测和残差。. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

