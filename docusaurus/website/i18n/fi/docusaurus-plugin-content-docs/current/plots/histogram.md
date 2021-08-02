---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogrammi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `string (required)`: muuttuja näyttää. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __groupMode__ | `string`: asetetaanko ryhmitellyt histogrammit päällekkäin (`Overlay`) vai erillisinä kuvioina vierekkäin (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: valvoo, näytetäänkö y-akselilla tiheysarvot lukumäärien sijasta.. Default: `false`.
* __densityType__ | `string`: kun näytetään tiheyksiä, voidaan päälle asettaa joko parametrinen jakauma (`Normaali`, `Yhtenäinen` tai `Exponentiaalinen`) tai ei-parametrinen ydintiheysestimaatti (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: ytimen tiheyden kaistanleveyden manuaalinen säätö (sovelletaan vain, kun `densityType` on asetettu `Data-driven`).. Default: `1`.
* __binStrategy__ | `string`: binning-strategia (`Automatic`, `Select # of bins`, tai `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: mukautettu lokeroiden määrä. Default: `none`.
* __nCols__ | `number`: sarakkeiden lukumäärä näytettäessä ryhmiteltyä fasettihistogrammia.. Default: `none`.
* __xBins__ | `{start,size,end}`: objekti, jonka "start"-, "size"- ja "end"-ominaisuudet ohjaavat binning-käyttäytymistä.. Default: `{}`.
* __sameXRange__ | `boolean`: jos true, x-akselin vaihteluväli on sama kuin koko histogrammissa.. Default: `false`.
* __sameYRange__ | `boolean`: jos true, y-akselin vaihteluväli kullakin osa-alueella on sama kuin koko histogrammissa.. Default: `false`.


## Esimerkkejä

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
