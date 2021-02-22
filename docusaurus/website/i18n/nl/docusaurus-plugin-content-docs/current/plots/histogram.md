---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Een histogram.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `string`: groepsvariabele. Default: `none`.
* __groupMode__ | `string`: of gegroepeerde histogrammen over elkaar heen moeten worden gelegd (`Overlay`) of in afzonderlijke percelen naast elkaar (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controleert of dichtheidswaarden worden weergegeven in plaats van tellingen op de y-as. Default: `false`.
* __densityType__ | `string`: bij het weergeven van dichtheden kan men ofwel een parametrische verdeling (`Normaal`, `Uniform` of `Exponentieel`) of een niet-parametrische kerneldichtheidsschatting (`Datagedreven`) over elkaar heen leggen. Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: binning strategie (`Automatisch`, `Selecteer # van bakken`, of `Set bin breedte`). Default: `'Automatic'`.
* __nBins__ | `number`: aangepast aantal bakken. Default: `none`.
* __nCols__ | `number`: aantal kolommen bij weergave van een gefacetteerd gegroepeerd histogram. Default: `none`.
* __xBins__ | `{start,size,end}`: object met `start`, `grootte`, en `eind` eigenschappen die het eetgedrag regelen. Default: `{}`.


## Voorbeelden

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

