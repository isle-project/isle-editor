---
id: map
title: Map
sidebar_label: Map
---

Географическая карта, на которую могут быть предоставлены либо названия мест, либо значения долготы/ширины.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __scope__ | `string`: область отображения карты. Default: `'world'`.
* __locations__ | `string`: имя переменной в `данных`, содержащих имена местоположений. Default: `none`.
* __locationmode__ | `string`: либо `ISO-3`, `USA-states`, либо `country names`, обозначающие, как кодируются значения в `locations`. Default: `'country names'`.
* __longitude__ | `string`: имя переменной в `данных`, содержащей значения долготы. Default: `none`.
* __latitude__ | `string`: имя переменной в `данных`, удерживающей значения широты. Default: `none`.
* __showLand__ | `boolean`: показывать ли географические особенности на карте. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Примеры
