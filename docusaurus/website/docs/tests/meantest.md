---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

One-sample mean test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `string (required)`: name of variable. Default: `none`.
* __type__ | `string`: type of test (`Z Test` or `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: standard deviation (for `Z Test`). Default: `none`.
* __alpha__ | `number`: significance level. Default: `0.05`.
* __direction__ | `string`: test direction (either `less`, `greater`, or `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: mean under the null hypothesis. Default: `0`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
