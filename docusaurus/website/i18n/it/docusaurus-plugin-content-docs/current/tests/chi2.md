---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Test di indipendenza del chi-quadrato.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __var1__ | `string (required)`: nome della prima variabile. Default: `none`.
* __var2__ | `string (required)`: nome della seconda variabile. Default: `none`.


## Esempi

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
