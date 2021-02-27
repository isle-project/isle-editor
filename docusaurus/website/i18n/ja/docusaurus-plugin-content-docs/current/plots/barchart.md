---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

棒グラフ。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 表示用変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: yvar` で計算し、各カテゴリのバーの高さとして表示される統計量の名前. Default: `none`.
* __horizontal__ | `boolean`: バーを水平に表示するかどうか. Default: `false`.
* __stackBars__ | `boolean`: グループ化する際に、バーを重ねるかどうかを制御します。. Default: `false`.
* __relative__ | `boolean`: 各グループ内の相対度数を計算するかどうか. Default: `false`.
* __totalPercent__ | `boolean`: 全体のバーを相対的な度数で表示するかどうか. Default: `false`.
* __xOrder__ | `string`: 全体、`カテゴリ`、`最小値`、`最大値`、`平均値`、または`中央値`のいずれかを指定します。. Default: `none`.
* __direction__ | `string`: x軸に沿って棒グラフを並べる方法 (`ascending` or `descending`). Default: `'ascending'`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
