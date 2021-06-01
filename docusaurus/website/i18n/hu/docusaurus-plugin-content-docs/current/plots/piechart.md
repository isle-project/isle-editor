---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Egy kördiagram komponens, amely alapértelmezés szerint egy kiválasztott változó összes kategóriájának számadatait jeleníti meg.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `(string|Factor) (required)`: változó a megjelenítéshez. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __summaryVariable__ | `string`: opcionális változó, amelynek összegét az egyes "változó" kategóriákhoz ki kell jeleníteni.. Default: `none`.


## Példák

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
