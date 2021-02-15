---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Two-sample mean test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __x__ | `string (required)`: name of first variable. Default: `none`.
* __y__ | `string`: name of second variable (`y` or `group` have to be supplied). Default: `none`.
* __group__ | `string`: name of grouping variable (`y` or `group` have to be supplied). Default: `none`.
* __type__ | `string`: type of test (either `Z Test` or `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: first standard deviation (for `Z Test`). Default: `none`.
* __ystdev__ | `number`: second standard deviation (for `Z Test`). Default: `none`.
* __alpha__ | `number`: significance level. Default: `0.05`.
* __direction__ | `string`: test direction (either `less`, `greater`, or `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: difference under H0. Default: `0`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
