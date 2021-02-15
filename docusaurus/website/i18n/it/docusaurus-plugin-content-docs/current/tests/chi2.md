---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Test di indipendenza del chi-quadrato.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __var1__ | `string (required)`: nome della prima variabile. Default: `none`.
* __var2__ | `string (required)`: nome della seconda variabile. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
