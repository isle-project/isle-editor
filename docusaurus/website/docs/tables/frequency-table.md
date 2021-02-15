---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

A frequency table.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: name of variable to be displayed. Default: `none`.
* __calculateCounts__ | `boolean`: controls whether to display absolute counts. Default: `true`.
* __calculateRelative__ | `boolean`: controls whether to display relative frequencies. Default: `false`.
* __group__ | `string`: name of grouping variable. Default: `none`.
* __nDecimalPlaces__ | `number`: number of decimal places for relative frequencies displayed in table. Default: `3`.


## Examples

## Examples

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
