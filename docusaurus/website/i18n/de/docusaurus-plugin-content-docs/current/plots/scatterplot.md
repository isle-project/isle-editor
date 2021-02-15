---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Berechnet den minimalen und maximalen Wert eines Arrays.

## Options

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __xval__ | `string (required)`: Variable, die auf der x-Achse angezeigt werden soll. Default: `none`.
* __yval__ | `string (required)`: Variable, die auf der y-Achse angezeigt werden soll. Default: `none`.
* __text__ | `string`: Texte, die neben den einzelnen Punkten angezeigt werden sollen. Default: `none`.
* __color__ | `string`: kategorische Variable zur Abbildung auf die Farbe der Punkte. Default: `none`.
* __type__ | `string`: kategorische Variable zur Abbildung auf die angezeigten Symbole. Default: `none`.
* __size__ | `string`: quantitative Variable zur Abbildung auf die Größe der Punkte. Default: `none`.
* __regressionLine__ | `boolean`: steuert, ob die Regressionslinie(n) überlagert werden sollen. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` und/oder `smooth` zur Anzeige der linearen Regression und der geglätteten LOWESS-Regressionslinie. Default: `[
  'linear'
]`.
* __lineBy__ | `string`: separate Regressionslinie für jede Kategorie der angegebenen kategorialen Variable anzeigen. Default: `none`.
* __smoothSpan__ | `number`: Glättungsspannenparameter für `glatte` Regressionslinie. Default: `0.66`.


## Examples

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

