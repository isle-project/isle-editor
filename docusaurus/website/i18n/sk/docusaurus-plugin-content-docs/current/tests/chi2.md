---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chí-kvadrát test nezávislosti.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __var1__ | `(string|Factor) (required)`: názov prvej premennej. Default: `none`.
* __var2__ | `(string|Factor) (required)`: názov druhej premennej. Default: `none`.


## Príklady

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
