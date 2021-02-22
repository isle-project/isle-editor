---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

モザイクのプロット。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __variables__ | `array (required)`: 表示用変数の配列. Default: `none`.
* __showColors__ | `boolean`: 重要性を示す色を表示するかどうかを制御します。. Default: `false`.
* __axisLabels__ | `string`: グループ化変数. Default: `'parallel to the axis'`.


## 例としては、以下のようなものがあります。

## Examples

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```
