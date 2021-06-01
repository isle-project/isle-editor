---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Riba graafik.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muutuja kuvamiseks. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __yvar__ | `string`: vabatahtlik muutuja, mida kasutatakse veergude kõrguste jaoks (koos `summary`ga). Default: `none`.
* __summary__ | `string`: selle statistika nimi, mida arvutatakse `yvar` jaoks ja mis kuvatakse iga kategooria jaoks tulba kõrgusena (kas `Min`, `Max`, `Mean`, `Median`, `Sum`, ...).. Default: `none`.
* __horizontal__ | `boolean`: kas kuvada ribasid horisontaalselt. Default: `false`.
* __stackBars__ | `boolean`: grupeerimisel kontrollib, kas ribad üksteise peale virnastada.. Default: `false`.
* __relative__ | `boolean`: kas arvutada suhtelised sagedused iga rühma sees. Default: `false`.
* __totalPercent__ | `boolean`: kas kuvada üldised tulbad suhteliste sagedustena. Default: `false`.
* __xOrder__ | `string`: kas "kokku", "kategooria", "miinimum", "maksimum", "keskmine" või "mediaan".. Default: `none`.
* __direction__ | `string`: kuidas järjestada ribasid x-telje ääres ("kasvav" või "kahanev"). Default: `'ascending'`.


## Näited

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
