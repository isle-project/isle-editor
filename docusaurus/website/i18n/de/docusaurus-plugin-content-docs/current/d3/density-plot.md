---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Eine d3-basierte Dichteplot-Komponente.

## Optionen

* __bandwidth__ | `number`: Glättungsparameter für den Kernel-Dichte-Schätzer. Default: `4`.
* __histogram__ | `boolean`: ein Histogramm neben dem Dichteplot anzeigen. Default: `true`.
* __nBins__ | `number`: Anzahl der Bins für das überlagerte Histogramm. Default: `8`.
* __vline__ | `object`: falls angegeben, zeigt eine vertikale Linie an dem angegebenen `Wert` mit einem angegebenen `Label` an. Default: `none`.
* __xlab__ | `string`: x-Achsen-Beschriftung. Default: `'value'`.
* __xmax__ | `number`: maximaler Wert, der auf der x-Achse angezeigt wird. Default: `1`.
* __xmin__ | `number`: minimaler Wert, der auf der x-Achse angezeigt wird. Default: `0`.
* __ymax__ | `number`: maximaler Wert, der auf der y-Achse angezeigt wird. Default: `0.15`.


## Beispiele

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

