---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Balkendiagramm.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __yvar__ | `string`: optionale Variable, die für die Spaltenhöhen verwendet wird (in Verbindung mit `summary`). Default: `none`.
* __summary__ | `string`: Name der Statistik, die für `yvar` berechnet und als Balkenhöhe für jede Kategorie angezeigt werden soll (entweder `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: ob Balken horizontal angezeigt werden sollen. Default: `false`.
* __stackBars__ | `boolean`: steuert beim Gruppieren, ob Takte übereinander gestapelt werden sollen. Default: `false`.
* __relative__ | `boolean`: ob relative Häufigkeiten innerhalb jeder Gruppe berechnet werden sollen. Default: `false`.
* __totalPercent__ | `boolean`: ob die Gesamtbalken als relative Häufigkeiten angezeigt werden sollen. Default: `false`.
* __xOrder__ | `string`: entweder `Gesamt`, `Kategorie`, `Min`, `Max`, `Mittel`, oder `Median`. Default: `none`.
* __direction__ | `string`: wie die Balken entlang der x-Achse angeordnet werden sollen; `ascending` oder `descending`. Default: `'ascending'`.


## Beispiele

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
