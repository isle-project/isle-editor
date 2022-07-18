---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogramm.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `string (required)`: muutuja kuvamiseks. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __title__ | `string`: histogrammi pealkiri. Default: `none`.
* __groupMode__ | `string`: kas grupeeritud histogramme üksteise peale (`Overlay`) või eraldi graafikutena üksteise kõrval (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: kontrollib, kas y-teljel näidatakse loenduste asemel tiheduse väärtusi.. Default: `false`.
* __densityType__ | `(string|array<string>)`: tiheduste kuvamisel saab üle kanda parameetrilise(d) jaotuse(d) (`Normaalne`, `Uniformne`, `T`, 'Chi-squared` või `Eksponentsiaalne`) ja/või mitteparameetrilise kerneli tiheduse hinnangu (`Data-driven`).. Default: `none`.
* __densityParams__ | `(array<number>|any)`: jaotuse parameetrid tiheduse jaoks, kui kasutatakse parameetrilist jaotust ([mu, sigma] normaaljaotuse puhul, [a, b] ühtlase jaotuse puhul, [lambda] eksponentsiaalse jaotuse puhul) või objekt, mis kaardistab jaotuse nimed parameetritele, kui tuleks kuvada mitu tihedust (nt `{'Normal': [mu, sigma], 'Uniform': [a, b]}, 'Exponentsiaalne': [lambda]}`).. Default: `[]`.
* __bandwidthAdjust__ | `number`: kerneli tiheduse ribalaiuse käsitsi reguleerimine (rakendub ainult siis, kui "densityType" on seatud "Data-driven").. Default: `1`.
* __binStrategy__ | `string`: binning strateegia (`Automaatne`, `Valige binside arv` või `Set bin width`). Default: `'Automatic'`.
* __nBins__ | `number`: kohandatud mahutite arv. Default: `none`.
* __nCols__ | `number`: veergude arv, kui kuvatakse grupeeritud histogrammi fassettide kaupa. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt, mille omadused `start`, `size` ja `end` reguleerivad binningu käitumist.. Default: `{}`.
* __sameXRange__ | `boolean`: kui see on tõsi, siis on iga tahu x-telje vahemik sama, mis üldine histogramm.. Default: `false`.
* __sameYRange__ | `boolean`: kui see on tõsi, siis on iga tahu y-telje vahemik sama, mis üldine histogramm.. Default: `false`.


## Näited

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
