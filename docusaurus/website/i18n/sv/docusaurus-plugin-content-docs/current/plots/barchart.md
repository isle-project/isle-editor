---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Stapeldiagram.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabel för att visa. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __yvar__ | `string`: valfri variabel som används för kolumnhöjderna (i samband med `summary`).. Default: `none`.
* __summary__ | `string`: namnet på den statistik som ska beräknas för `yvar` och som ska visas som stapelhöjd för varje kategori (antingen `Min`, `Max`, `Mean`, `Median`, `Sum`, ...).. Default: `none`.
* __horizontal__ | `boolean`: Om staplarna ska visas horisontellt.. Default: `false`.
* __stackBars__ | `boolean`: vid gruppering, kontrollerar om staplarna ska staplas ovanpå varandra. Default: `false`.
* __relative__ | `boolean`: Om man ska beräkna relativa frekvenser inom varje grupp.. Default: `false`.
* __totalPercent__ | `boolean`: Om de totala staplarna ska visas som relativa frekvenser.. Default: `false`.
* __xOrder__ | `string`: antingen `total`, `category`, `min`, `max`, `mean` eller `median`.. Default: `none`.
* __direction__ | `string`: Hur ordnar man staplar längs x-axeln (`ascending` eller `descending`)?. Default: `'ascending'`.


## Exempel

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
