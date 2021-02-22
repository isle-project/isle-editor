---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Сюжет для скрипки.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: переменная для отображения. Default: `none`.
* __group__ | `string`: переменная группировки. Default: `none`.
* __showBox__ | `boolean`: управляет тем, отображать ли на экране участок коробки внутри. Default: `false`.


## Примеры

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

