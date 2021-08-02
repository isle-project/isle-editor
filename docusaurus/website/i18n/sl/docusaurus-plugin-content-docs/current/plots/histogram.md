---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogram.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: spremenljivka za prikaz. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __groupMode__ | `string`: ali naj se združeni histogrami prekrijejo drug na drugega (`Overlay`) ali v ločenih ploskvah drug ob drugem (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: nadzoruje, ali naj se na osi y namesto števila prikažejo vrednosti gostote.. Default: `false`.
* __densityType__ | `string`: pri prikazu gostot lahko prekrijemo parametrično porazdelitev (`Normalna`, `enakomerna` ali `eksponencialna`) ali neparametrično oceno gostote jedra (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: ročno prilagajanje pasovne širine gostote jedra (velja samo, če je `densityType` nastavljeno na `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: strategija biniranja (`Avtomatsko`, `Izberite # binov` ali `Nastavite širino binov`). Default: `'Automatic'`.
* __nBins__ | `number`: število košaric po meri. Default: `none`.
* __nCols__ | `number`: število stolpcev pri prikazu histograma z razvrščenimi stranicami. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt z lastnostmi `začetek`, `velikost` in `konec`, ki določajo obnašanje pri biniranju. Default: `{}`.
* __sameXRange__ | `boolean`: če je true, bo območje osi x za vsako stran enako celotnemu histogramu.. Default: `false`.
* __sameYRange__ | `boolean`: če je to res, bo obseg osi y za vsako stran enak celotnemu histogramu.. Default: `false`.


## Primeri

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
