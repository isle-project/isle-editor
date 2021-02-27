---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Two-sample proportion test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __var1__ | `string (required)`: name of first variable. Default: `none`.
* __success__ | `string (required)`: success category of `var1`. Default: `none`.
* __var2__ | `string`: name of second variable (`var2` or `group` have to be supplied). Default: `none`.
* __group__ | `(string|Factor)`: name of grouping variable (`var2` or `group` have to be supplied). Default: `none`.
* __alpha__ | `number`: significance level. Default: `0.05`.
* __direction__ | `string`: test direction (either `less`, `greater`, or `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: difference under H0. Default: `0`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
