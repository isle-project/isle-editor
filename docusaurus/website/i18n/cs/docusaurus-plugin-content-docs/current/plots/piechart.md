---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Komponenta koláčového grafu, která ve výchozím nastavení zobrazuje počty všech kategorií vybrané proměnné.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `(string|Factor) (required)`: proměnná pro zobrazení. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __summaryVariable__ | `string`: nepovinná proměnná, jejíž součet se zobrazí pro každou kategorii `proměnná`.. Default: `none`.


## Příklady

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
