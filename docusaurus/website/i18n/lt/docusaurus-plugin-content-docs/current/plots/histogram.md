---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histograma.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: kintamasis rodomas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __groupMode__ | `string`: ar sugrupuotas histogramas dengti vieną ant kitos (`Overlay`), ar atskirose diagramose šalia viena kitos (`Facets`).. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: kontroliuoja, ar y ašyje rodyti tankio vertes, o ne skaičių.. Default: `false`.
* __densityType__ | `string`: rodant tankį, galima uždengti parametrinį pasiskirstymą (`Normalusis`, `Vienodasis` arba `Eksponentinis`) arba neparametrinį branduolio tankio įvertį (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: rankinis branduolio tankio juostos pločio reguliavimas (taikoma tik tada, kai `densityType` nustatyta į `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: binavimo strategija (`Automatinė`, `Pasirinkite # bins` arba `Nustatykite bins plotį`). Default: `'Automatic'`.
* __nBins__ | `number`: pasirinktinis talpyklų skaičius. Default: `none`.
* __nCols__ | `number`: stulpelių skaičius, kai rodoma grupinė histograma.. Default: `none`.
* __xBins__ | `{start,size,end}`: objektas su `pradžios`, `dydžio` ir `galutinės` savybėmis, reguliuojančiomis suskirstymo elgesį.. Default: `{}`.
* __sameXRange__ | `boolean`: jei true, kiekvieno aspekto x ašies diapazonas bus toks pat kaip ir bendra histograma.. Default: `false`.
* __sameYRange__ | `boolean`: jei true, kiekvieno aspekto y ašies diapazonas bus toks pat kaip ir bendra histograma.. Default: `false`.


## Pavyzdžiai

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
