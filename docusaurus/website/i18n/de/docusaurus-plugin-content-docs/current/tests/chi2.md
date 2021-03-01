---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Chi-Quadrat-Unabhängigkeitstest.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __var1__ | `(string|Factor) (required)`: Name der ersten Variablen. Default: `none`.
* __var2__ | `(string|Factor) (required)`: Name der zweiten Variablen. Default: `none`.


## Beispiele

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
