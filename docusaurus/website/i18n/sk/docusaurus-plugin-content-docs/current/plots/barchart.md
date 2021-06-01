---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Stĺpcový graf.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `(string|Factor) (required)`: premenná na zobrazenie. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __yvar__ | `string`: nepovinná premenná používaná pre výšky stĺpcov (v spojení s `summary`). Default: `none`.
* __summary__ | `string`: názov štatistiky, ktorá sa vypočíta pre `yvar` a zobrazí sa ako výška stĺpca pre každú kategóriu (buď `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: či sa majú pruhy zobrazovať horizontálne. Default: `false`.
* __stackBars__ | `boolean`: pri zoskupovaní kontroluje, či sa majú stĺpce ukladať na seba.. Default: `false`.
* __relative__ | `boolean`: či vypočítať relatívne frekvencie v každej skupine. Default: `false`.
* __totalPercent__ | `boolean`: či sa majú celkové stĺpce zobrazovať ako relatívne frekvencie. Default: `false`.
* __xOrder__ | `string`: buď `celkom`, `kategória`, `min`, `max`, `median` alebo `median`. Default: `none`.
* __direction__ | `string`: ako zoradiť tyče vedľa osi x (`vzostupne` alebo `zostupne`). Default: `'ascending'`.


## Príklady

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
