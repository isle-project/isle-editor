---
id: chi2
title: Correlation Test
sidebar_label: Correlation Test
---

Test na niezależność Chi-square.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __var1__ | `string (required)`: nazwa pierwszej zmiennej. Default: `none`.
* __var2__ | `string (required)`: nazwa drugiej zmiennej. Default: `none`.


## Examples

```jsx live
<Chi2Test
    data={heartdisease} 
    var1="Drugs"
    var2="Complications"
/>
```
