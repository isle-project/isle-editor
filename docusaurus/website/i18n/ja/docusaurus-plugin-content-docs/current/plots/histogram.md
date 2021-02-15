---
id: histogram
title: Histogram
sidebar_label: Histogram
---

ヒストグラムです。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.
* __group__ | `string`: グループ化変数. Default: `none`.
* __groupMode__ | `string`: グループ化されたヒストグラムを重ねて表示するか (`Overlay`)、あるいは隣り合った別々のプロットに表示するか (`Facets`)。. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: y軸にカウントではなく密度値を表示するかどうかを制御します。. Default: `false`.
* __densityType__ | `string`: 密度を表示する際には、パラメトリック分布（`正規分布`, `一様分布`, `指数分布`）かノンパラメトリックカーネル密度推定値（`データ駆動型`）を重ね合わせることができます。. Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: ビニング戦略 (`自動`, `ビンの数を選択`, `ビンの幅を設定`). Default: `'Automatic'`.
* __nBins__ | `number`: 慣習的な箱の数. Default: `none`.
* __nCols__ | `number`: ファセットグループ化されたヒストグラムを表示する際の列数. Default: `none`.
* __xbins__ | `{start,size,end}`: undefined. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

