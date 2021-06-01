---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

Graf QQ s normálním rozdělením.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: proměnná pro zobrazení. Default: `none`.


## Příklady

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

