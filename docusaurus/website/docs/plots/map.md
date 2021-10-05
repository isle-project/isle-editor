---
id: map
title: Map
sidebar_label: Map
---

A geographic map which can be either supplied location names or longitude/latitude values.

## Options

* __data__ | `object (required)`: object of value arrays for each variable. Default: `none`.
* __scope__ | `string`: scope of map to be displayed. Default: `'world'`.
* __locations__ | `string`: name of variable in `data` holding location names. Default: `none`.
* __locationmode__ | `string`: either `ISO-3`, `USA-states`, or `country names` denoting how values in `locations` are encoded. Default: `'country names'`.
* __longitude__ | `string`: name of variable in `data` holding longitude values. Default: `none`.
* __latitude__ | `string`: name of variable in `data` holding latitude values. Default: `none`.
* __showLand__ | `boolean`: whether to show geographic features on map. Default: `false`.
* __aggregation__ | `string`: string indicating how to aggregate values for each location. Default: `'sum'`.


## Examples
