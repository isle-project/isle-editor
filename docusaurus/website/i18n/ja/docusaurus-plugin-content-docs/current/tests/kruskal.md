---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

クラスカル・ワリス検定

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: へんすうめい. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
