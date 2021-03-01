---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Test na niezależność Chi-square.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __var1__ | `(string|Factor) (required)`: nazwa pierwszej zmiennej. Default: `none`.
* __var2__ | `(string|Factor) (required)`: nazwa drugiej zmiennej. Default: `none`.


## Przykłady

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
