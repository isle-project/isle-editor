---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-kwadraat onafhankelijkheidstest.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __var1__ | `(string|Factor) (required)`: naam van eerste variabele. Default: `none`.
* __var2__ | `(string|Factor) (required)`: naam van tweede variabele. Default: `none`.


## Voorbeelden

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
