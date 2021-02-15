---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Ein Histogramm.

## Options

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `string`: Gruppierungsvariable. Default: `none`.
* __groupMode__ | `string`: ob gruppierte Histogramme übereinander (`Overlay`) oder in separaten Plots nebeneinander (`Facets`) liegen sollen. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: steuert, ob Dichtewerte anstelle von Zählwerten auf der y-Achse angezeigt werden sollen. Default: `false`.
* __densityType__ | `string`: bei der Darstellung von Dichten kann entweder eine parametrische Verteilung (`Normal`, `Uniform` oder `Exponential`) oder eine nicht-parametrische Kernel-Dichte-Schätzung (`Daten-gesteuert`) überlagert werden. Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: Binning-Strategie (`Automatisch`, `Anzahl der Bins wählen` oder `Bin-Breite einstellen`). Default: `'Automatic'`.
* __nBins__ | `number`: Benutzerdefinierte Anzahl von Fächern. Default: `none`.
* __nCols__ | `number`: Anzahl der Spalten bei der Anzeige eines facettierten gruppierten Histogramms. Default: `none`.
* __xbins__ | `{start,size,end}`: undefined. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

