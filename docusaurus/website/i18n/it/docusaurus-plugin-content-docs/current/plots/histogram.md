---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Un istogramma.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `string`: variabile di raggruppamento. Default: `none`.
* __groupMode__ | `string`: se sovrapporre istogrammi raggruppati l'uno sull'altro (`Overlay`) o in trame separate l'una accanto all'altra (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controlla se visualizzare i valori di densità invece dei conteggi sull'asse y. Default: `false`.
* __densityType__ | `string`: quando si visualizzano le densità, si può sia sovrapporre una distribuzione parametrica (`Normale`, `Uniforme`, o `Exponenziale`) sia una stima non parametrica della densità del kernel (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: strategia di binning (`Automatico`, `Seleziona # di bidoni`, o `Imposta larghezza bidone`). Default: `'Automatic'`.
* __nBins__ | `number`: numero personalizzato di bidoni. Default: `none`.
* __nCols__ | `number`: numero di colonne quando si visualizza un istogramma raggruppato sfaccettato. Default: `none`.
* __xBins__ | `{start,size,end}`: oggetto con proprietà `start`, `size` e `end` che regolano il comportamento di binning. Default: `{}`.


## Examples

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

