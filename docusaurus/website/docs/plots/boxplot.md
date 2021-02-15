---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

A box plot.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `(array|string) (required)`: variable(s) to display. Default: `none`.
* __group__ | `array`: one or two grouping variables. Default: `[]`.
* __orientation__ | `string`: `vertical` or `horizontal` orientation. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controls whether to overlay points. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

