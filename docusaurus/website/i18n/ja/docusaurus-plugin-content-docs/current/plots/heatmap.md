---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

2つの変数間の関係を可視化するためのヒートマップ。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __x__ | `string (required)`: Ｘ軸変数. Default: `none`.
* __y__ | `string (required)`: Ｙ軸変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __overlayPoints__ | `boolean`: 各オブザベーションのポイントをオーバーレイするかどうかを制御します。. Default: `false`.
* __smoothSpan__ | `number`: スムージングスパン. Default: `0.66`.
* __regressionMethod__ | `array<string>`: 線形および/または平滑化された回帰直線をオーバーレイするための `linear` および/または `smooth` を含む配列．. Default: `none`.
* __alternateColor__ | `boolean`: ヒートマップに別のカラースキームを使用するかどうかを制御します。. Default: `false`.
* __commonXAxis__ | `boolean`: グループ化変数の値ごとに複数のヒートマップを作成する際に、共通のx軸を使用するかどうかを制御します。. Default: `false`.
* __commonYAxis__ | `boolean`: グループ化変数の値ごとに複数のヒートマップを作成する際に、共通のy軸を使用するかどうかを制御します。. Default: `false`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    group="Gender"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
