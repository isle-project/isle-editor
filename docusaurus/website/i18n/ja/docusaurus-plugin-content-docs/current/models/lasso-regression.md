---
id: lasso-regression
title: LASSO Regression
sidebar_label: LASSO Regression
---

LASSO回帰。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `string (required)`: アウトカム変数. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一つ以上の予測変数. Default: `none`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __lambda__ | `number`: せいきかパラメタ. Default: `0.001`.
* __intercept__ | `boolean`: は，切片項を持つモデルを適合させるかどうかを制御します．. Default: `true`.


## Examples

```jsx live
<LassoRegression
    data={heartdisease} 
    y="Cost"
    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
    quantitative={['Age','Cost','Interventions']}
/>
```

