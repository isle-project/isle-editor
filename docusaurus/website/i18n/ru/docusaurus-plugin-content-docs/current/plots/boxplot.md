---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Сюжет коробки.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `(array|string) (required)`: переменная для отображения. Default: `none`.
* __group__ | `array`: одна или две группирующие переменные. Default: `[]`.
* __orientation__ | `string`: `вертикальная` или `горизонтальная` ориентация.. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: контроль над тем, накладывать ли точки. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

