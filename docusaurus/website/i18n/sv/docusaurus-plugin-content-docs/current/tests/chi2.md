---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-square oberoende test.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __var1__ | `(string|Factor) (required)`: namnet på den första variabeln. Default: `none`.
* __var2__ | `(string|Factor) (required)`: namnet på den andra variabeln. Default: `none`.


## Exempel

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
