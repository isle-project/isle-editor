---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Egy hisztogram.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: változó a megjelenítéshez. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __title__ | `string`: a hisztogram címe. Default: `none`.
* __groupMode__ | `string`: hogy a csoportosított hisztogramokat egymásra helyezzük-e (`Overlay`) vagy különálló ábrákon egymás mellett (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: szabályozza, hogy az y-tengelyen a sűrűségértékek jelenjenek-e meg a számlálás helyett.. Default: `false`.
* __densityType__ | `string`: a sűrűségek megjelenítésekor vagy egy parametrikus eloszlást (`Normális`, `Egyenletes` vagy `Exponenciális`) vagy egy nem parametrikus kernel sűrűségbecslést (`Adatvezérelt`) lehet ráteríteni.. Default: `none`.
* __densityParams__ | `array<number>`: eloszlás paraméterei a sűrűséghez, ha parametrikus eloszlást használunk ([mu, sigma] normális eloszlás esetén, [a, b] egyenletes eloszlás esetén, [lambda] exponenciális eloszlás esetén).. Default: `[]`.
* __bandwidthAdjust__ | `number`: a kernel sűrűség sávszélességének kézi beállítása (csak akkor alkalmazható, ha a "densityType" értéke "Data-driven"). Default: `1`.
* __binStrategy__ | `string`: binning stratégia (`Automatic`, `Select # of bins`, vagy `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: tárolók egyéni száma. Default: `none`.
* __nCols__ | `number`: oszlopok száma egy fakultatív csoportosított hisztogram megjelenítésekor. Default: `none`.
* __xBins__ | `{start,size,end}`: objektum a "start", "size" és "end" tulajdonságokkal, amelyek a binning viselkedést szabályozzák.. Default: `{}`.
* __sameXRange__ | `boolean`: ha igaz, akkor az x-tengely tartománya az egyes fakultásokhoz ugyanaz lesz, mint a teljes hisztogramé.. Default: `false`.
* __sameYRange__ | `boolean`: ha igaz, akkor az y-tengelyek tartománya minden egyes facet esetében ugyanaz lesz, mint a teljes hisztogramé.. Default: `false`.


## Példák

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
