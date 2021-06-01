---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-kvadrato nepriklausomumo testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __var1__ | `(string|Factor) (required)`: pirmojo kintamojo pavadinimas. Default: `none`.
* __var2__ | `(string|Factor) (required)`: antrojo kintamojo pavadinimas. Default: `none`.


## Pavyzdžiai

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
