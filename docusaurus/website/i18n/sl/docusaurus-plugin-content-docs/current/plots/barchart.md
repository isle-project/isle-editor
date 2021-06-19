---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Stolpčni diagram.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: spremenljivka za prikaz. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __yvar__ | `string`: neobvezna spremenljivka, ki se uporablja za višino stolpcev (v povezavi z `summary`). Default: `none`.
* __summary__ | `string`: ime statistike, ki se izračuna za `yvar` in se prikaže kot višina stolpca za vsako kategorijo (bodisi `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: ali naj se vrstice prikažejo vodoravno. Default: `false`.
* __stackBars__ | `boolean`: pri združevanju v skupine določa, ali naj se palice zložijo druga na drugo.. Default: `false`.
* __relative__ | `boolean`: ali izračunati relativne frekvence znotraj vsake skupine.. Default: `false`.
* __totalPercent__ | `boolean`: ali naj se skupni stolpci prikažejo kot relativne frekvence.. Default: `false`.
* __xOrder__ | `string`: bodisi `skupaj`, `kategorija`, `min`, `max`, `srednja` ali `mediana`. Default: `none`.
* __direction__ | `string`: kako urediti palice ob osi x (`ascending` ali `descending`). Default: `'ascending'`.


## Primeri

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
