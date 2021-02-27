---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Гистограмма.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `(string|Factor) (required)`: переменная для отображения. Default: `none`.
* __group__ | `(string|Factor)`: переменная группировки. Default: `none`.
* __yvar__ | `string`: undefined. Default: `none`.
* __summary__ | `string`: название статистики для вычисления для `yvar` и для отображения в виде высоты столбика для каждой категории. Default: `none`.
* __horizontal__ | `boolean`: отображать ли полосы по горизонтали. Default: `false`.
* __stackBars__ | `boolean`: при группировке, контролирует, следует ли укладывать стержни друг на друга.. Default: `false`.
* __relative__ | `boolean`: следует ли вычислять относительные частоты внутри каждой группы.. Default: `false`.
* __totalPercent__ | `boolean`: отображать ли общие полосы в качестве относительных частот. Default: `false`.
* __xOrder__ | `string`: либо `тотал`, `категория`, `мин`, `макс`, `медиан`, либо `медиан".. Default: `none`.
* __direction__ | `string`: как заказать бары вдоль оси x (`возбуждающийся` или `растающий`).. Default: `'ascending'`.


## Примеры

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
