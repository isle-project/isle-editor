---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

A pie chart component that by default displays the counts of all categories from a chosen variable.

## Options

* __data__ | `object (required)`: object of value arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable to display. Default: `none`.
* __group__ | `(string|Factor)`: grouping variable. Default: `none`.
* __summaryVariable__ | `string`: optional variable whose sum to display for each `variable` category. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
