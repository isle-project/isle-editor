---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

等高線図。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __x__ | `string (required)`: Ｘ軸変数. Default: `none`.
* __y__ | `string (required)`: Ｙ軸変数. Default: `none`.
* __overlayPoints__ | `boolean`: 各オブザベーションのポイントをオーバーレイするかどうかを制御します。. Default: `false`.
* __smoothSpan__ | `number`: スムージングスパン. Default: `0.66`.
* __regressionMethod__ | `array<string>`: 線形および/または平滑化された回帰直線をオーバーレイするための `linear` および/または `smooth` を含む配列．. Default: `none`.
* __onSelected__ | `function`: 点が x, y の値で選択され、選択された点が選択されたときに呼び出されるコールバック. Default: `onSelected() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

