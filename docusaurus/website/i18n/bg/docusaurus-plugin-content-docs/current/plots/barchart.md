---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Бар диаграма.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `(string|Factor) (required)`: променлива за показване. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __yvar__ | `string`: незадължителна променлива, използвана за височините на колоните (в комбинация с `summary`). Default: `none`.
* __summary__ | `string`: име на статистиката, която ще се изчислява за `yvar` и ще се показва като височина на стълба за всяка категория (или `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: дали да се показват ленти хоризонтално. Default: `false`.
* __stackBars__ | `boolean`: при групиране контролира дали баровете да се подреждат един върху друг. Default: `false`.
* __relative__ | `boolean`: дали да се изчисляват относителните честоти във всяка група. Default: `false`.
* __totalPercent__ | `boolean`: дали да се показват общите барове като относителни честоти. Default: `false`.
* __xOrder__ | `string`: `общо`, `категория`, `мин`, `макс`, `средна` или `медиана`. Default: `none`.
* __direction__ | `string`: как да подредите баровете покрай оста x (`нарастващи` или `намаляващи`). Default: `'ascending'`.


## Примери

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
