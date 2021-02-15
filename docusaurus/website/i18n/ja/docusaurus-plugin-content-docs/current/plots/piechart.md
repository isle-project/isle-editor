---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

デフォルトでは、選択された変数からのすべてのカテゴリのカウントを表示する円グラフコンポーネントです。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __summaryVariable__ | `string`: 各 `variable` カテゴリの合計を表示するオプションの変数. Default: `none`.


## Examples

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

