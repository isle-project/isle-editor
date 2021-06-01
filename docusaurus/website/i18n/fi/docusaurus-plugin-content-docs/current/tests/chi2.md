---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Khiin neliö -riippumattomuustesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __var1__ | `(string|Factor) (required)`: ensimmäisen muuttujan nimi. Default: `none`.
* __var2__ | `(string|Factor) (required)`: toisen muuttujan nimi. Default: `none`.


## Esimerkkejä

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
