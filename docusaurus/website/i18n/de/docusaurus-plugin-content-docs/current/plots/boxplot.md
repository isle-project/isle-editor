---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Ein Boxplot.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `(array|string) (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `array`: eine oder zwei Gruppierungsvariablen. Default: `[]`.
* __orientation__ | `string`: vertikale" oder "horizontale" Ausrichtung. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: steuert, ob Punkte überlagert werden sollen. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

