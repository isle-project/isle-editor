---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

カイ2乗独立性検定。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __var1__ | `(string|Factor) (required)`: 先頭変数名. Default: `none`.
* __var2__ | `(string|Factor) (required)`: 二番目の変数名. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
