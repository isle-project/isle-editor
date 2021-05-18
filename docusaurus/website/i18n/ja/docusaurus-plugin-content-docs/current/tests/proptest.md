---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

1標本の比例検定。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 変数名. Default: `none`.
* __success__ | `any (required)`: 変数の成功カテゴリ. Default: `none`.
* __alpha__ | `number`: 有意水準. Default: `0.05`.
* __direction__ | `string`: テスト方向. Default: `'two-sided'`.
* __p0__ | `number`: 帰無仮説の下での割合. Default: `0.5`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
