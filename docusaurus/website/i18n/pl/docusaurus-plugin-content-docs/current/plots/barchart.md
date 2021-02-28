---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Wykres słupkowy.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(string|Factor) (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupowania. Default: `none`.
* __yvar__ | `string`: opcjonalna zmienna używana do określania wysokości kolumn (w połączeniu z `summary`). Default: `none`.
* __summary__ | `string`: nazwa statystyki do obliczenia dla `yvar` i do wyświetlenia jako wysokość słupka dla każdej kategorii (albo `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: czy wyświetlać paski w poziomie. Default: `false`.
* __stackBars__ | `boolean`: podczas grupowania kontroluje, czy pręty należy układać jeden na drugim. Default: `false`.
* __relative__ | `boolean`: czy obliczyć częstotliwości względne wewnątrz każdej grupy. Default: `false`.
* __totalPercent__ | `boolean`: czy wyświetlać paski ogólne jako częstotliwości względne. Default: `false`.
* __xOrder__ | `string`: `ogółem`, `kategorią`, `min`, `max`, `środkiem` lub `medianem`. Default: `none`.
* __direction__ | `string`: jak zamawiać pręty wzdłuż osi x (`skośne` lub `skośne`). Default: `'ascending'`.


## Przykłady

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
