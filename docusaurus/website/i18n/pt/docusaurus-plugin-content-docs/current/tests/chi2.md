---
id: chi2
title: Chi-square Independence Test
sidebar_label: Chi-square Independence Test
---

Teste de independência do qui-quadrado.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __var1__ | `(string|Factor) (required)`: nome da primeira variável. Default: `none`.
* __var2__ | `(string|Factor) (required)`: nome da segunda variável. Default: `none`.


## Exemplos

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
