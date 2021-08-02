---
id: histogram
title: Histogram
sidebar_label: Histogram
---

O histogramă.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori. Default: `none`.
* __variable__ | `string (required)`: variabilă pentru a afișa. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __groupMode__ | `string`: dacă se suprapun histogramele grupate unul peste altul (`Overlay`) sau în diagrame separate unul lângă altul (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controlează dacă se afișează valorile densității în loc de numere pe axa y.. Default: `false`.
* __densityType__ | `string`: atunci când se afișează densități, se poate suprapune fie o distribuție parametrică (`Normal`, `Uniform` sau `Exponențială`), fie o estimare neparametrică a densității kernel (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: ajustarea manuală a lățimii de bandă a densității nucleului (aplicabilă numai atunci când `densityType` este setat la `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: strategia de binning (`Automatic`, `Select # of bins`, sau `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: număr personalizat de compartimente. Default: `none`.
* __nCols__ | `number`: numărul de coloane la afișarea unei histograme grupate pe fațete. Default: `none`.
* __xBins__ | `{start,size,end}`: obiect cu proprietățile `start`, `size` și `end` care guvernează comportamentul de binning. Default: `{}`.
* __sameXRange__ | `boolean`: dacă este adevărat, intervalul de pe axa x pentru fiecare fațetă va fi același cu cel al histogramei generale. Default: `false`.
* __sameYRange__ | `boolean`: dacă este adevărat, intervalul axei y pentru fiecare fațetă va fi același cu cel al histogramei generale.. Default: `false`.


## Exemple

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
