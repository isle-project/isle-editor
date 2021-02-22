---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Prueba de independencia de chi-cuadrado.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __var1__ | `string (required)`: nombre de la primera variable. Default: `none`.
* __var2__ | `string (required)`: nombre de la segunda variable. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
