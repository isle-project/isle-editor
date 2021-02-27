---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

2標本の比例検定。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __var1__ | `string (required)`: 先頭変数名. Default: `none`.
* __success__ | `string (required)`: var1`の成功カテゴリ. Default: `none`.
* __var2__ | `string`: 2番目の変数の名前 (`var2` または `group` を指定する必要があります). Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数の名前 (`var2` または `group` を指定する必要がある). Default: `none`.
* __alpha__ | `number`: 有意水準. Default: `0.05`.
* __direction__ | `string`: テスト方向. Default: `'two-sided'`.
* __diff__ | `number`: Ｈ０以下の差. Default: `0`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
