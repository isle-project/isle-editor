---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

デフォルトでは、選択された変数からのすべてのカテゴリのカウントを表示する円グラフコンポーネントです。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `(string|Factor) (required)`: 表示用変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __summaryVariable__ | `string`: 各 `variable` カテゴリの合計を表示するオプションの変数. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
