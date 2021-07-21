---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

多线性回归。

## 选项

* __data__ | `object (required)`: 值数组对象. Default: `none`.
* __y__ | `(string|Factor) (required)`: 结果变量. Default: `none`.
* __success__ | `any (required)`: `y`的成功类别. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: 一个或多个预测变量. Default: `none`.
* __quantitative__ | `array<string> (required)`: "数据 "中的 "定量 "变量数组。. Default: `none`.
* __omitMissing__ | `boolean`: 控制是否省略缺失值. Default: `false`.
* __intercept__ | `boolean`: 控制是否拟合带有截距项的模型。. Default: `true`.
* __onPredict__ | `function`: 用预测函数调用回调，对新数据进行预测. Default: `none`.


## 例子

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

