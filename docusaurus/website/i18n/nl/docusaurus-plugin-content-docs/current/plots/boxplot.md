---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Een box plot.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `(array|string) (required)`: weer te geven variabele. Default: `none`.
* __group__ | `array`: een of twee groepsvariabelen. Default: `[]`.
* __orientation__ | `string`: Verticale' of 'Horizontale' oriëntatie.. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controles om punten te overlappen. Default: `false`.


## Voorbeelden

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

