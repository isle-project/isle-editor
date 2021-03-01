---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

One-sample proportion test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: name of variable. Default: `none`.
* __success__ | `string (required)`: success category of `variable`. Default: `none`.
* __alpha__ | `number`: significance level. Default: `0.05`.
* __direction__ | `string`: test direction (either `less`, `greater`, or `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: proportion under the null hypothesis. Default: `0.5`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
