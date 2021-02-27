---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis Test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: variable name. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
