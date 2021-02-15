---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

値を昇順にソートするために使用するコンパレータ関数です。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __variable__ | `string (required)`: 表示用変数. Default: `none`.


## Examples

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

