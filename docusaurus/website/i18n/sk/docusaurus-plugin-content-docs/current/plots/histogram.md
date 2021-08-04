---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogram.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `string (required)`: premenná na zobrazenie. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __title__ | `string`: názov histogramu. Default: `none`.
* __groupMode__ | `string`: či sa majú zoskupené histogramy prekrývať nad sebou (`Overlay`) alebo v samostatných grafoch vedľa seba (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: ovláda, či sa majú na osi y zobrazovať hodnoty hustoty namiesto počtov.. Default: `false`.
* __densityType__ | `string`: pri zobrazovaní hustôt je možné prekryť parametrické rozdelenie (`Normálne`, `Jednotkové` alebo `Exponenciálne`) alebo neparametrický jadrový odhad hustoty (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: manuálne nastavenie šírky pásma hustoty jadra (platí len vtedy, keď je `densityType` nastavené na `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: stratégia binningu (`Automatický`, `Vyberte # binov` alebo `Nastavte šírku binov`). Default: `'Automatic'`.
* __nBins__ | `number`: vlastný počet zásobníkov. Default: `none`.
* __nCols__ | `number`: počet stĺpcov pri zobrazovaní zoskupeného histogramu. Default: `none`.
* __xBins__ | `{start,size,end}`: objekt s vlastnosťami `start`, `size` a `end`, ktoré určujú správanie pri binningu. Default: `{}`.
* __sameXRange__ | `boolean`: ak je to pravda, rozsah osi x pre každý aspekt bude rovnaký ako celkový histogram. Default: `false`.
* __sameYRange__ | `boolean`: ak je to pravda, rozsah osi y pre každý aspekt bude rovnaký ako celkový histogram. Default: `false`.


## Príklady

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
