---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Test d'indépendance du chi carré.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __var1__ | `string (required)`: nom de la première variable. Default: `none`.
* __var2__ | `string (required)`: nom de la deuxième variable. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
