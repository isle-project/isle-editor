---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogram.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: proměnná pro zobrazení. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __title__ | `string`: název histogramu. Default: `none`.
* __groupMode__ | `string`: zda překrýt seskupené histogramy nad sebou (`Overlay`) nebo v samostatných grafech vedle sebe (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: určuje, zda se mají na ose y zobrazovat hodnoty hustoty místo počtů.. Default: `false`.
* __densityType__ | `string`: při zobrazování hustot lze překrýt buď parametrické rozdělení (`Normální`, `Jednotné` nebo `Exponenciální`), nebo neparametrický jádrový odhad hustoty (`Data-driven`).. Default: `none`.
* __densityParams__ | `array<number>`: parametry rozdělení pro hustotu při použití parametrického rozdělení ([mu, sigma] pro normální rozdělení, [a, b] pro rovnoměrné rozdělení, [lambda] pro exponenciální rozdělení).. Default: `[]`.
* __bandwidthAdjust__ | `number`: ruční nastavení šířky pásma hustoty jádra (platí pouze při nastavení `densityType` na `Data-driven`).. Default: `1`.
* __binStrategy__ | `string`: strategie binování (`Automatické`, `Výběr # binů` nebo `Nastavení šířky binů`).. Default: `'Automatic'`.
* __nBins__ | `number`: vlastní počet košů. Default: `none`.
* __nCols__ | `number`: počet sloupců při zobrazení seskupeného histogramu s fasetami. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt s vlastnostmi `start`, `size` a `end`, které určují chování při binningu.. Default: `{}`.
* __sameXRange__ | `boolean`: pokud je true, bude rozsah osy x pro každý aspekt stejný jako celkový histogram.. Default: `false`.
* __sameYRange__ | `boolean`: pokud je true, bude rozsah osy y pro každý aspekt stejný jako celkový histogram.. Default: `false`.


## Příklady

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
