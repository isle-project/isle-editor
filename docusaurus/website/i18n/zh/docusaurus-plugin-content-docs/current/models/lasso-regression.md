---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO回归。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `string (required)`: 结果变量. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一个或多个预测变量. Default: `none`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __lambda__ | `number`: 正则化参数. Default: `0.001`.
* __intercept__ | `boolean`: 控制是否拟合带有截距项的模型。. Default: `true`.


## 例子

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

