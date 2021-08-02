---
id: histogram
title: Histogram
sidebar_label: Histogram
---

ヒストグラムです。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `(string|Factor)`: グループ化変数. Default: `none`.
* __groupMode__ | `string`: グループ化されたヒストグラムを重ねて表示するか (`Overlay`)、あるいは隣り合った別々のプロットに表示するか (`Facets`)。. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: y軸にカウントではなく密度値を表示するかどうかを制御します。. Default: `false`.
* __densityType__ | `string`: 密度を表示する際には、パラメトリック分布（`正規分布`, `一様分布`, `指数分布`）かノンパラメトリックカーネル密度推定値（`データ駆動型`）を重ね合わせることができます。. Default: `none`.
* __bandwidthAdjust__ | `number`: カーネル密度の帯域幅を手動で調整する ( `densityType` が `Data-driven` に設定されている場合にのみ適用されます). Default: `1`.
* __binStrategy__ | `string`: ビニング戦略 (`自動`, `ビンの数を選択`, `ビンの幅を設定`). Default: `'Automatic'`.
* __nBins__ | `number`: 慣習的な箱の数. Default: `none`.
* __nCols__ | `number`: ファセットグループ化されたヒストグラムを表示する際の列数. Default: `none`.
* __xBins__ | `{start,size,end}`: オブジェクトで、ビニング動作を制御する `start`, `size`, `end` プロパティを持ちます。. Default: `{}`.
* __sameXRange__ | `boolean`: trueの場合、各ファセットのX軸方向の範囲は、全体のヒストグラムと同じになります。. Default: `false`.
* __sameYRange__ | `boolean`: trueの場合、各ファセットのY軸の範囲は、全体のヒストグラムと同じになります。. Default: `false`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
