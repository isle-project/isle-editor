---
id: tukeyhsd
title: Tukey HSD Test
sidebar_label: Tukey HSD Test
---

Tukey HSD test for multiple pairwise comparisons.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: name of variable to be displayed. Default: `none`.
* __group__ | `(string|Factor)`: name of grouping variable. Default: `none`.
* __confidenceLevel__ | `number`: confidence level. Default: `0.95`.


## Examples

```jsx live
<TukeyHSDTest
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
