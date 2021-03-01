---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

多线性回归。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `string (required)`: 结果变量. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: 一个或多个预测变量. Default: `none`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __omitMissing__ | `boolean`: 控制是否省略缺失值. Default: `false`.
* __intercept__ | `boolean`: 控制是否拟合带有截距项的模型。. Default: `true`.
* __onDiagnostics__ | `function`: 诊断图调用的回调. Default: `none`.
* __onPredict__ | `function`: 模型拟合后，调用回调来处理预测和残差。. Default: `none`.


## 例子

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

