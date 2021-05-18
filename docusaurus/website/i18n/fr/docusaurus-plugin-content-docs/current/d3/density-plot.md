---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Un composant de diagramme de densité basé sur d3.

## Options

* __bandwidth__ | `number`: paramètre de lissage pour l'estimateur de densité du noyau. Default: `4`.
* __histogram__ | `boolean`: afficher un histogramme à côté de la courbe de densité. Default: `true`.
* __nBins__ | `number`: nombre de bacs pour l'histogramme superposé. Default: `8`.
* __vline__ | `object`: s'il est fourni, affichera une ligne verticale à la "valeur" fournie avec une "étiquette" donnée. Default: `none`.
* __xlab__ | `string`: étiquette de l'axe des x. Default: `'value'`.
* __xmax__ | `number`: valeur maximale affichée sur l'axe des x. Default: `1`.
* __xmin__ | `number`: valeur minimale affichée sur l'axe des x. Default: `0`.
* __ymax__ | `number`: valeur maximale affichée sur l'axe des y. Default: `0.15`.


## Exemples

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

