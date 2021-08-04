---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Ett histogram.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `string (required)`: variabel för att visa. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __title__ | `string`: titel på histogrammet. Default: `none`.
* __groupMode__ | `string`: Om grupperade histogram ska läggas över varandra (`Overlay`) eller i separata diagram bredvid varandra (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: Kontrollerar om täthetsvärden ska visas i stället för antal på y-axeln.. Default: `false`.
* __densityType__ | `string`: När man visar tätheter kan man antingen lägga över en parametrisk fördelning (`Normal`, `Uniform` eller `Exponential`) eller en icke-parametrisk kärndensitetsuppskattning (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: Manuell justering av bandbredden för kärndensiteten (gäller endast när `densityType` är satt till `Data-driven`).. Default: `1`.
* __binStrategy__ | `string`: binningstrategi (`Automatisk`, `Välj antal binningar`, eller `Sätt binbredd`).. Default: `'Automatic'`.
* __nBins__ | `number`: anpassat antal fack. Default: `none`.
* __nCols__ | `number`: antal kolumner vid visning av ett grupperat histogram med facetter.. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt med egenskaperna `start`, `size` och `end` som styr binning. Default: `{}`.
* __sameXRange__ | `boolean`: Om det är sant kommer x-axelns intervall för varje facett att vara detsamma som det övergripande histogrammet.. Default: `false`.
* __sameYRange__ | `boolean`: Om det är sant kommer y-axelns intervall för varje facett att vara detsamma som det övergripande histogrammet.. Default: `false`.


## Exempel

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
