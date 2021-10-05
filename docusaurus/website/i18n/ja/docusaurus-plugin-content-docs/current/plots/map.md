---
id: map
title: Map
sidebar_label: Map
---

与えられた地名または経度/緯度値のいずれかを指定できる地理地図。

## オプション

* __data__ | `object (required)`: 各変数の値の配列のオブジェクト. Default: `none`.
* __scope__ | `string`: 表示範囲. Default: `'world'`.
* __locations__ | `string`: 場所の名前を保持する`data`内の変数名. Default: `none`.
* __locationmode__ | `string`: ISO-3`, `USA-state`, `locations` の値がどのようにエンコードされているかを示す `国名` のいずれか。. Default: `'country names'`.
* __longitude__ | `string`: 経度値を保持する`data`内の変数名. Default: `none`.
* __latitude__ | `string`: 緯度値を保持する`data`内の変数名. Default: `none`.
* __showLand__ | `boolean`: 地図上に地理的特徴を表示するかどうか. Default: `false`.
* __aggregation__ | `string`: 各ロケーションの値の集計方法を示す文字列（`sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, or `last` のいずれか）。. Default: `'sum'`.


## 例としては、以下のようなものがあります。
