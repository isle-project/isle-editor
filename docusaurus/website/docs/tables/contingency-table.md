---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

A contingency table.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __rowVar__ | `string (required)`: row variable name. Default: `none`.
* __colVar__ | `string (required)`: column variable name. Default: `none`.
* __relativeFreqs__ | `boolean`: controls whether to display relative frequencies. Default: `false`.
* __group__ | `string`: name of grouping variable. Default: `none`.
* __display__ | `array<string>`: whether to display `Row Percent` and/or `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: number of decimal places for relative frequencies displayed in table. Default: `3`.


## Examples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
