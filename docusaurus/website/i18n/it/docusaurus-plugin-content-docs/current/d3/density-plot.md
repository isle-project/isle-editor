---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Un componente del grafico di densità basato su d3.

## Opzioni

* __bandwidth__ | `number`: parametro di lisciatura per lo stimatore di densità del kernel. Default: `4`.
* __histogram__ | `boolean`: mostra un istogramma accanto al grafico della densità. Default: `true`.
* __nBins__ | `number`: numero di contenitori per l'istogramma sovrapposto.. Default: `8`.
* __vline__ | `object`: se fornita, visualizzerà una linea verticale al "valore" fornito con una data "etichetta".. Default: `none`.
* __xlab__ | `string`: Etichetta asse x. Default: `'value'`.
* __xmax__ | `number`: valore massimo visualizzato sull'asse x. Default: `1`.
* __xmin__ | `number`: valore minimo visualizzato sull'asse delle x. Default: `0`.
* __ymax__ | `number`: valore massimo visualizzato sull'asse y. Default: `0.15`.


## Esempi

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

