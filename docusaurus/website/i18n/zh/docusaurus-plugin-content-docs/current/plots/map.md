---
id: map
title: Map
sidebar_label: Map
---

一个地理地图，可以是提供的地点名称或经度/纬度值。

## 选项

* __data__ | `object (required)`: 每个变量的值数组对象. Default: `none`.
* __scope__ | `string`: 显示的地图范围. Default: `'world'`.
* __locations__ | `string`: `data`中存放地点名称的变量名称。. Default: `none`.
* __locationmode__ | `string`: "ISO-3"、"美国各州 "或 "国家名称 "表示如何对 "地点 "中的数值进行编码。. Default: `'country names'`.
* __longitude__ | `string`: `data`中存放经度值的变量名称。. Default: `none`.
* __latitude__ | `string`: `data`中存放纬度值的变量名称。. Default: `none`.
* __showLand__ | `boolean`: 是否在地图上显示地理特征. Default: `false`.
* __aggregation__ | `string`: 表示如何汇总每个位置的值的字符串（`sum'、`avg'、`min'、`max'、`mode'、`median'、`count'、`first'或`last'）。. Default: `'sum'`.


## 例子
