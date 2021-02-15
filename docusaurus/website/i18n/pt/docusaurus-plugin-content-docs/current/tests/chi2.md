---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Teste de independência do qui-quadrado.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __var1__ | `string (required)`: nome da primeira variável. Default: `none`.
* __var2__ | `string (required)`: nome da segunda variável. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
