---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Таблица частот.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: имя переменной для отображения. Default: `none`.
* __calculateCounts__ | `boolean`: контролирует, отображать ли абсолютные подсчёты. Default: `true`.
* __calculateRelative__ | `boolean`: управляет отображением относительных частот. Default: `false`.
* __group__ | `string`: имя группирующей переменной. Default: `none`.
* __nDecimalPlaces__ | `number`: количество знаков после запятой для относительных частот, отображаемых в таблице. Default: `3`.


## Examples

## Examples

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
