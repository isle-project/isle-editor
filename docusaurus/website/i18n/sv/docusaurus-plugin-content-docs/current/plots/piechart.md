---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

En cirkeldiagramkomponent som som standard visar antalet av alla kategorier från en vald variabel.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variabel för att visa. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __summaryVariable__ | `string`: valfri variabel vars summa ska visas för varje kategori av variabler.. Default: `none`.


## Exempel

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
