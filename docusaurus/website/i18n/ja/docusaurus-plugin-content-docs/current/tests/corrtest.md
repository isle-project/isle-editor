---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

相関検定。

## オプション

* __data__ | `object (required)`: 値の配列のオブジェクト. Default: `none`.
* __var1__ | `string (required)`: 先頭変数名. Default: `none`.
* __var2__ | `string (required)`: 二番目の変数名. Default: `none`.
* __rho0__ | `number`: 帰無仮説の下での相関値. Default: `0`.
* __alpha__ | `number`: 有意水準. Default: `0.05`.
* __direction__ | `string`: テスト方向. Default: `'two-sided'`.
* __showDecision__ | `boolean`: は，指定された有意水準で帰無仮説が棄却されたかどうかを表示するかどうかを制御します．. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
