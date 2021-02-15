---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Correlation test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __var1__ | `string (required)`: name of first variable. Default: `none`.
* __var2__ | `string (required)`: name of second variable. Default: `none`.
* __rho0__ | `number`: correlation value under the null hypothesis. Default: `0`.
* __alpha__ | `number`: significance level. Default: `0.05`.
* __direction__ | `string`: test direction (either `less`, `greater`, or `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: controls whether to display if the null hypothesis is rejected at the specified significance level. Default: `false`.


## Examples

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
