---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Test neodvisnosti Chi-kvadrat.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __var1__ | `(string|Factor) (required)`: ime prve spremenljivke. Default: `none`.
* __var2__ | `(string|Factor) (required)`: ime druge spremenljivke. Default: `none`.


## Primeri

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
