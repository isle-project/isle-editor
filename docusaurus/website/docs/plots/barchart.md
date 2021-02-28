---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Bar chart.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __yvar__ | `string`: optional variable used for the column heights (in conjunction with `summary`). Default: `none`.
* __summary__ | `string`: name of statistic to compute for `yvar` and to be displayed as bar height for each category (either `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: whether to display bars horizontally. Default: `false`.
* __stackBars__ | `boolean`: when grouping, controls whether to stack bars on top of each other. Default: `false`.
* __relative__ | `boolean`: whether to calculate relative frequencies inside each group. Default: `false`.
* __totalPercent__ | `boolean`: whether to display overall bars as relative frequencies. Default: `false`.
* __xOrder__ | `string`: either `total`, `category`, `min`, `max`, `mean`, or `median`. Default: `none`.
* __direction__ | `string`: how to order bars alongside x-axis (`ascending` or `descending`). Default: `'ascending'`.


## Examples

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
