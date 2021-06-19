---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Sloupcový graf.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `(string|Factor) (required)`: proměnná pro zobrazení. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __yvar__ | `string`: nepovinná proměnná používaná pro výšky sloupců (ve spojení s `summary`). Default: `none`.
* __summary__ | `string`: název statistiky, která se vypočítá pro `yvar` a zobrazí se jako výška sloupce pro každou kategorii (buď `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: zda se mají sloupce zobrazovat vodorovně. Default: `false`.
* __stackBars__ | `boolean`: při seskupování určuje, zda se mají sloupce skládat na sebe.. Default: `false`.
* __relative__ | `boolean`: zda vypočítat relativní četnosti uvnitř každé skupiny.. Default: `false`.
* __totalPercent__ | `boolean`: zda se mají celkové sloupce zobrazovat jako relativní četnosti. Default: `false`.
* __xOrder__ | `string`: buď `celkem`, `kategorie`, `min`, `max`, `průměr` nebo `medián`.. Default: `none`.
* __direction__ | `string`: jak uspořádat sloupce podél osy x (`ascending` nebo `descending`). Default: `'ascending'`.


## Příklady

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
