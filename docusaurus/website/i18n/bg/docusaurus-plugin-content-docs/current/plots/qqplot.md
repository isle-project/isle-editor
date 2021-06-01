---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

QQ диаграма с нормално разпределение.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: променлива за показване. Default: `none`.


## Примери

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

