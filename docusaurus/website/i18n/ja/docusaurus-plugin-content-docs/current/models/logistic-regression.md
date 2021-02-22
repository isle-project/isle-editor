---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

重線形回帰。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `string (required)`: アウトカム変数. Default: `none`.
* __success__ | `any (required)`: ｙの成功カテゴリ. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一つ以上の予測変数. Default: `none`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __omitMissing__ | `boolean`: 欠損値を省略するかどうかを制御します。. Default: `false`.
* __intercept__ | `boolean`: は，切片項を持つモデルを適合させるかどうかを制御します．. Default: `true`.
* __onPredict__ | `function`: モデルフィッティング後の予測値と残差で呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<LogisticRegression 
    data={heartdisease} 
    y="Complications"
    success={1}
    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

