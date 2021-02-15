---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

カイ2乗独立性検定。

## Options

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __var1__ | `string (required)`: 先頭変数名. Default: `none`.
* __var2__ | `string (required)`: 二番目の変数名. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
