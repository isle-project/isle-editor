---
id: clt-continuous
title: Continuous CLT
sidebar_label: Continuous CLT
---

選択された連続分布の中心極限定理(CLT)を説明する学習コンポーネント。

## オプション

* __distributions__ | `array<string>`: 選べる統計分布（一様分布、指数分布、正規分布. Default: `[
  'uniform',
  'exponential',
  'normal'
]`.
* __samples__ | `(array<number>|number)`: undefined. Default: `25`.
* __hideFormulas__ | `boolean`: コンポーネントのテキストで数式を隠すかどうかを制御します。. Default: `false`.


## 例としては、以下のようなものがあります。

```jsx live
<LearnContinuousCLT />
```

