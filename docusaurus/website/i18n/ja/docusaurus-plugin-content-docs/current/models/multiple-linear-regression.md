---
id: multiple-linear-regression
title: Multiple Linear Regression
sidebar_label: Multiple Linear Regression
---

重線形回帰。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `string (required)`: アウトカム変数. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一つ以上の予測変数. Default: `none`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __omitMissing__ | `boolean`: 欠損値を省略するかどうかを制御します。. Default: `false`.
* __intercept__ | `boolean`: は，切片項を持つモデルを適合させるかどうかを制御します．. Default: `true`.
* __onDiagnostics__ | `function`: 診断プロットで呼び出されるコールバック. Default: `none`.
* __onPredict__ | `function`: モデルフィッティング後の予測値と残差で呼び出されるコールバック. Default: `none`.


## Examples

```jsx live
<MultipleLinearRegression 
    data={heartdisease} 
    y="Cost"
    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

