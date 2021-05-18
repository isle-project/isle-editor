---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

d3ベースの密度プロットコンポーネント。

## オプション

* __bandwidth__ | `number`: カーネル密度推定器の平滑化パラメータ. Default: `4`.
* __histogram__ | `boolean`: 密度プロットの横にヒストグラムを表示します. Default: `true`.
* __nBins__ | `number`: オーバーレイされたヒストグラムのビン数. Default: `8`.
* __vline__ | `object`: が指定された場合、指定された `value` の位置に垂直線を表示し、指定された `label` と一緒に表示します。. Default: `none`.
* __xlab__ | `string`: Ｘ軸ラベル. Default: `'value'`.
* __xmax__ | `number`: Ｘ軸表示の最大値. Default: `1`.
* __xmin__ | `number`: Ｘ軸最小値. Default: `0`.
* __ymax__ | `number`: Ｙ軸の最大値. Default: `0.15`.


## 例としては、以下のようなものがあります。

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

