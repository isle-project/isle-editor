---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-square independence test.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __var1__ | `(string|Factor) (required)`: name of first variable. Default: `none`.
* __var2__ | `(string|Factor) (required)`: name of second variable. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
