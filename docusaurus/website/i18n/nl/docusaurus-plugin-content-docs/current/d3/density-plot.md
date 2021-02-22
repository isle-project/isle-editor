---
id: density-plot
title: Density Plot
sidebar_label: Density Plot
---

Een op d3 gebaseerde dichtheidscomponent van het perceel.

## Opties

* __bandwidth__ | `number`: afvlakkingsparameter voor de kerneldichtheidsschatting. Default: `4`.
* __histogram__ | `boolean`: laat een histogram zien naast het dichtheidsplaatje. Default: `true`.
* __nBins__ | `number`: aantal bakken voor het overlappende histogram.. Default: `8`.
* __vline__ | `object`: indien geleverd, zal een verticale lijn op de geleverde `waarde` met een gegeven `label` worden weergegeven.. Default: `none`.
* __xlab__ | `string`: x-aslabel. Default: `'value'`.
* __xmax__ | `number`: maximale waarde weergegeven op de x-as. Default: `1`.
* __xmin__ | `number`: minimumwaarde weergegeven op de x-as. Default: `0`.
* __ymax__ | `number`: maximale waarde weergegeven op de y-as. Default: `0.15`.


## Voorbeelden

```jsx live
<DensityPlot
    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}
    xmin={0}
    xmax={100}
    ymax={0.5}
/>
```

