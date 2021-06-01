---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chí-kvadrát test nezávislosti.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __var1__ | `(string|Factor) (required)`: název první proměnné. Default: `none`.
* __var2__ | `(string|Factor) (required)`: název druhé proměnné. Default: `none`.


## Příklady

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
