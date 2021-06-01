---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-square sõltumatuse test.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __var1__ | `(string|Factor) (required)`: esimese muutuja nimi. Default: `none`.
* __var2__ | `(string|Factor) (required)`: teise muutuja nimi. Default: `none`.


## Näited

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
