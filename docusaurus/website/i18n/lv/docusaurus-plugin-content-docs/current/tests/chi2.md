---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-kvadrāta neatkarības tests.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __var1__ | `(string|Factor) (required)`: pirmā mainīgā nosaukums. Default: `none`.
* __var2__ | `(string|Factor) (required)`: otrā mainīgā nosaukums. Default: `none`.


## Piemēri

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
