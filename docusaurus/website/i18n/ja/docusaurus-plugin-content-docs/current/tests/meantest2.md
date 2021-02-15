---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

2標本平均検定。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __x__ | `string (required)`: 先頭変数名. Default: `none`.
* __y__ | `string`: 2 番目の変数の名前 (`y` または `group` を指定する必要があります). Default: `none`.
* __group__ | `string`: グループ化変数の名前 (`y` または `group` を指定する必要があります). Default: `none`.
* __type__ | `string`: テストの種類. Default: `'T Test'`.
* __xstdev__ | `number`: 第一標準偏差. Default: `none`.
* __ystdev__ | `number`: 第二標準偏差. Default: `none`.
* __alpha__ | `number`: 有意水準. Default: `0.05`.
* __direction__ | `string`: テスト方向. Default: `'two-sided'`.
* __diff__ | `number`: Ｈ０以下の差. Default: `0`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## Examples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
