---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Een histogram.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `string (required)`: weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __title__ | `string`: titel van histogram. Default: `none`.
* __groupMode__ | `string`: of gegroepeerde histogrammen over elkaar heen moeten worden gelegd (`Overlay`) of in afzonderlijke percelen naast elkaar (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controleert of dichtheidswaarden worden weergegeven in plaats van tellingen op de y-as. Default: `false`.
* __densityType__ | `string`: bij het weergeven van dichtheden kan men ofwel een parametrische verdeling (`Normaal`, `Uniform` of `Exponentieel`) of een niet-parametrische kerneldichtheidsschatting (`Datagedreven`) over elkaar heen leggen. Default: `none`.
* __bandwidthAdjust__ | `number`: handmatige aanpassing van de bandbreedte van de kernel dichtheid (alleen van toepassing wanneer `densityType` is ingesteld op `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: binning strategie (`Automatisch`, `Selecteer # van bakken`, of `Set bin breedte`). Default: `'Automatic'`.
* __nBins__ | `number`: aangepast aantal bakken. Default: `none`.
* __nCols__ | `number`: aantal kolommen bij weergave van een gefacetteerd gegroepeerd histogram. Default: `none`.
* __xBins__ | `{start,size,end}`: object met `start`, `grootte`, en `eind` eigenschappen die het eetgedrag regelen. Default: `{}`.
* __sameXRange__ | `boolean`: indien waar, zal het x-as bereik voor elk facet hetzelfde zijn als het algemene histogram. Default: `false`.
* __sameYRange__ | `boolean`: indien waar, zal het y-as bereik voor elk facet hetzelfde zijn als het totale histogram. Default: `false`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
