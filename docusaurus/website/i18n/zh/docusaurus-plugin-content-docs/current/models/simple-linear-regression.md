---
id: simple-linear-regression
title: Simple Linear Regression
sidebar_label: Simple Linear Regression
---

简单的线性回归。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __x__ | `string (required)`: 解释变量. Default: `none`.
* __y__ | `string (required)`: 应变量. Default: `none`.
* __group__ | `(string|Factor)`: 分组变量. Default: `none`.
* __omitMissing__ | `boolean`: 控制是否在模型拟合中忽略缺失值. Default: `false`.
* __onDiagnostics__ | `function`: 诊断图调用的回调. Default: `none`.
* __onPredict__ | `function`: undefined. Default: `none`.


## 例子

```jsx live
<SimpleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x="Interventions"
    group="Complications"
/>
```

