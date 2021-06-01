---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Søjlediagram.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabel til visning. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __yvar__ | `string`: valgfri variabel, der anvendes til kolonnehøjder (i forbindelse med `summary`). Default: `none`.
* __summary__ | `string`: navnet på den statistik, der skal beregnes for `yvar` og vises som søjlehøjde for hver kategori (enten `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: om bjælkerne skal vises vandret. Default: `false`.
* __stackBars__ | `boolean`: ved gruppering, styrer, om søjlerne skal stables oven på hinanden. Default: `false`.
* __relative__ | `boolean`: om der skal beregnes relative frekvenser inden for hver gruppe. Default: `false`.
* __totalPercent__ | `boolean`: om de samlede søjler skal vises som relative frekvenser. Default: `false`.
* __xOrder__ | `string`: enten `total`, `category`, `min`, `max`, `mean`, eller `median`. Default: `none`.
* __direction__ | `string`: hvordan man ordner søjler langs x-aksen (`opstigende` eller `nedadgående`). Default: `'ascending'`.


## Eksempler

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
