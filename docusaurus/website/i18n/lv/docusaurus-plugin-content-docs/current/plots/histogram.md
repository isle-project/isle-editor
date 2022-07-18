---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogramma.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `string (required)`: mainīgais lielums, lai parādītu. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __title__ | `string`: histogrammas nosaukums. Default: `none`.
* __groupMode__ | `string`: vai pārklāt sagrupētas histogrammas vienu virs otras (`Overlay`) vai atsevišķos laukumos blakus (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: kontrolē, vai uz y-asis attēlot blīvuma vērtības, nevis skaitļus.. Default: `false`.
* __densityType__ | `(string|array<string>)`: parādot blīvumus, var pārklāt parametrisko(-os) sadalījumu(-us) (`Normāls`, `Uniformāls`, `T`, 'Chi-kvadrātveida` vai `eksponenciāls`) un/vai neparametrisku kodola blīvuma novērtējumu (`Data-driven`).. Default: `none`.
* __densityParams__ | `(array<number>|any)`: sadalījuma parametri blīvumam, ja tiek izmantots parametriskais sadalījums ([mu, sigma] normālajam sadalījumam, [a, b] vienmērīgajam sadalījumam, [lambda] eksponenciālajam sadalījumam), vai objekts, kas attēlo sadalījuma nosaukumus parametriem, ja jāattēlo vairāki blīvumi (piemēram, `{{'Normal': [mu, sigma], 'Uniform': [a, b]}, 'Exponential': [lambda]}`).. Default: `[]`.
* __bandwidthAdjust__ | `number`: kodola blīvuma joslas platuma manuāla regulēšana (piemērojams tikai tad, ja `densityType` ir iestatīts uz `Data-driven`).. Default: `1`.
* __binStrategy__ | `string`: binēšanas stratēģija (`Automātiska`, `Izvēlēties # bins` vai `Noteikt bin platumu`).. Default: `'Automatic'`.
* __nBins__ | `number`: pielāgotais tvertņu skaits. Default: `none`.
* __nCols__ | `number`: kolonnu skaits, kad tiek rādīta šķautņaina grupēta histogramma.. Default: `none`.
* __xBins__ | `{start,size,end}`: objekts ar `start`, `size` un `end` īpašībām, kas regulē binning uzvedību.. Default: `{}`.
* __sameXRange__ | `boolean`: ja true, katras šķautnes x-as diapazons būs tāds pats kā kopējā histogramma.. Default: `false`.
* __sameYRange__ | `boolean`: ja true, y ass diapazons katrai šķautnei būs tāds pats kā kopējai histogrammai.. Default: `false`.


## Piemēri

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
