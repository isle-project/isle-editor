---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

Egy normál eloszlású QQ-diagram.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: változó a megjelenítéshez. Default: `none`.


## Példák

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

