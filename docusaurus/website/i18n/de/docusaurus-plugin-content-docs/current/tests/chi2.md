---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Chi-Quadrat-Unabhängigkeitstest.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __var1__ | `string (required)`: Name der ersten Variablen. Default: `none`.
* __var2__ | `string (required)`: Name der zweiten Variablen. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
