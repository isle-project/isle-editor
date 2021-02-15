---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analysis of variance.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: name of variable to be displayed. Default: `none`.
* __group__ | `string`: name of grouping variable. Default: `none`.
* __showDecision__ | `boolean`: controls whether to display the test decision. Default: `false`.


## Examples

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
