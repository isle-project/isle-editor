---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Chi-kwadraat onafhankelijkheidstest.

## Options

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __var1__ | `string (required)`: naam van eerste variabele. Default: `none`.
* __var2__ | `string (required)`: naam van tweede variabele. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
