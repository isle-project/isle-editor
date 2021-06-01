---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Testul de independență Chi-pătrat.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __var1__ | `(string|Factor) (required)`: numele primei variabile. Default: `none`.
* __var2__ | `(string|Factor) (required)`: numele celei de-a doua variabile. Default: `none`.


## Exemple

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
