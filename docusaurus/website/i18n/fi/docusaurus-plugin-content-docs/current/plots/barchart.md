---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Pylväsdiagrammi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muuttuja näyttää. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __yvar__ | `string`: valinnainen muuttuja, jota käytetään sarakkeiden korkeuksiin (yhdessä `summary`:n kanssa).. Default: `none`.
* __summary__ | `string`: sen tilaston nimi, joka lasketaan `yvar`:lle ja joka näytetään kunkin luokan pylvään korkeutena (joko `Min`, `Max`, `Mean`, `Median`, `Sum`, ...).. Default: `none`.
* __horizontal__ | `boolean`: näytetäänkö palkit vaakasuunnassa. Default: `false`.
* __stackBars__ | `boolean`: kun ryhmitellään, säädetään, pinotaanko palkit päällekkäin.. Default: `false`.
* __relative__ | `boolean`: lasketaanko suhteelliset frekvenssit kunkin ryhmän sisällä.. Default: `false`.
* __totalPercent__ | `boolean`: näytetäänkö kokonaispalkit suhteellisina frekvensseinä?. Default: `false`.
* __xOrder__ | `string`: joko `total`, `category`, `min`, `max`, `mean` tai `median`.. Default: `none`.
* __direction__ | `string`: miten järjestetään palkit x-akselin varrella (`ascending` tai `descending`).. Default: `'ascending'`.


## Esimerkkejä

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
