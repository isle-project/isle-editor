---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

分散分析。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示対象変数名. Default: `none`.
* __group__ | `string`: グループ化変数名. Default: `none`.
* __showDecision__ | `boolean`: テスト決定を表示するかどうかを制御します。. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
