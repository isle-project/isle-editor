---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

ナイーブ・ベイズは，クラス・メンバーシップが与えられた予測変数が正規分布に従うと仮定する．

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __y__ | `string (required)`: アウトカム変数. Default: `none`.
* __x__ | `(array<string>|string) (required)`: 一つ以上の予測変数. Default: `none`.
* __quantitative__ | `array<string> (required)`: 定量的`data`の変数の配列. Default: `none`.
* __omitMissing__ | `boolean`: 欠損値を省略するかどうかを制御します。. Default: `false`.
* __onPredict__ | `function`: モデルフィッティング後の予測値と残差で呼び出されるコールバック. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

