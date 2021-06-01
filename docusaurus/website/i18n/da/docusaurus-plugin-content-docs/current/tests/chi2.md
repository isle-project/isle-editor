---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-square uafhængighedstest.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __var1__ | `(string|Factor) (required)`: navnet på den første variabel. Default: `none`.
* __var2__ | `(string|Factor) (required)`: navnet på den anden variabel. Default: `none`.


## Eksempler

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
