---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

値を昇順にソートするために使用するコンパレータ関数です。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

