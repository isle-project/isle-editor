---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

一標本平均検定。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 変数名. Default: `none`.
* __type__ | `string`: テストの型 (`Z テスト` または `T テスト`). Default: `'T Test'`.
* __stdev__ | `number`: 標準偏差. Default: `none`.
* __alpha__ | `number`: 有意水準. Default: `0.05`.
* __direction__ | `string`: テスト方向. Default: `'two-sided'`.
* __mu0__ | `number`: 帰無仮説の下での平均. Default: `0`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
