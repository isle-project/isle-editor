---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Staafdiagram.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `(string|Factor) (required)`: weer te geven variabele. Default: `none`.
* __group__ | `(string|Factor)`: groepsvariabele. Default: `none`.
* __yvar__ | `string`: optionele variabele gebruikt voor de kolomhoogtes (in combinatie met `summary`). Default: `none`.
* __summary__ | `string`: naam van de statistiek die moet worden berekend voor `yvar` en moet worden weergegeven als balkhoogte voor elke categorie (ofwel `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: het al dan niet horizontaal weergeven van balken. Default: `false`.
* __stackBars__ | `boolean`: bij het groeperen controleert of de staven op elkaar gestapeld moeten worden. Default: `false`.
* __relative__ | `boolean`: of de relatieve frequenties binnen elke groep moeten worden berekend. Default: `false`.
* __totalPercent__ | `boolean`: het al dan niet weergeven van de algemene balken als relatieve frequenties. Default: `false`.
* __xOrder__ | `string`: ofwel `totaal`, `categorie`, `min`, `max`, `mean`, of `median`. Default: `none`.
* __direction__ | `string`: hoe bestelt u de staven naast de x-as ('neerwaarts' of 'neerwaarts')?. Default: `'ascending'`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
