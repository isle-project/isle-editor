---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Et histogram.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `string (required)`: variabel til visning. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __title__ | `string`: titel på histogrammet. Default: `none`.
* __groupMode__ | `string`: om grupperede histogrammer skal overlejres oven på hinanden (`Overlay`) eller i separate plot ved siden af hinanden (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: styrer, om der skal vises tæthedsværdier i stedet for tællinger på y-aksen. Default: `false`.
* __densityType__ | `string`: Når man viser tætheder, kan man enten lægge en parametrisk fordeling (`Normal`, `Uniform` eller `Exponential`) eller et ikke-parametrisk kerne-tæthedsestimat (`Data-driven`) over hinanden.. Default: `none`.
* __bandwidthAdjust__ | `number`: manuel justering af båndbredden for kernetætheden (kun gældende, når `densityType` er indstillet til `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: binningstrategi (`Automatisk`, `Vælg antal bin'er` eller `Sæt binbredde`). Default: `'Automatic'`.
* __nBins__ | `number`: brugerdefineret antal beholdere. Default: `none`.
* __nCols__ | `number`: antallet af kolonner ved visning af et grupperet histogram med facetter. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt med egenskaberne `start`, `size` og `end`, der regulerer binning-adfærd. Default: `{}`.
* __sameXRange__ | `boolean`: hvis det er sandt, vil x-akseområdet for hver facet være det samme som det samlede histogram. Default: `false`.
* __sameYRange__ | `boolean`: hvis det er sandt, vil y-akseområdet for hver facet være det samme som det samlede histogram. Default: `false`.


## Eksempler

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
