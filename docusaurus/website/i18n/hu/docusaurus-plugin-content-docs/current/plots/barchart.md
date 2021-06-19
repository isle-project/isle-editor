---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Sávdiagram.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `(string|Factor) (required)`: változó a megjelenítéshez. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __yvar__ | `string`: opcionális változó, amelyet az oszlopmagasságokhoz használnak (a `summary`-vel együtt). Default: `none`.
* __summary__ | `string`: a `yvar`-ra kiszámítandó és az egyes kategóriákhoz sávmagasságként megjelenítendő statisztika neve (vagy `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: hogy vízszintesen jelenjenek-e meg a sávok. Default: `false`.
* __stackBars__ | `boolean`: csoportosításkor szabályozza, hogy a sávok egymásra legyenek-e halmozva. Default: `false`.
* __relative__ | `boolean`: kiszámítja-e a relatív gyakoriságokat az egyes csoportokon belül. Default: `false`.
* __totalPercent__ | `boolean`: hogy az összesített sávokat relatív gyakoriságként jelenítse-e meg. Default: `false`.
* __xOrder__ | `string`: vagy "összesen", "kategória", "minimum", "maximum", "átlag" vagy "medián".. Default: `none`.
* __direction__ | `string`: hogyan rendezzük a sávokat az x-tengely mentén (`ascending` vagy `descending`). Default: `'ascending'`.


## Példák

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
