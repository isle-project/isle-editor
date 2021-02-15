---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

棒グラフ。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: yvar` で計算し、各カテゴリのバーの高さとして表示される統計量の名前. Default: `none`.
* __horizontal__ | `boolean`: バーを水平に表示するかどうか. Default: `false`.
* __stackBars__ | `boolean`: グループ化する際に、バーを重ねるかどうかを制御します。. Default: `false`.
* __relative__ | `boolean`: 各グループ内の相対度数を計算するかどうか. Default: `false`.
* __totalPercent__ | `boolean`: 全体のバーを相対的な度数で表示するかどうか. Default: `false`.
* __xOrder__ | `string`: 全体、`カテゴリ`、`最小値`、`最大値`、`平均値`、または`中央値`のいずれかを指定します。. Default: `none`.
* __direction__ | `string`: x軸に沿って棒グラフを並べる方法 (`ascending` or `descending`). Default: `'ascending'`.


## Examples

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

