---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Pīrāga diagrammas komponents, kas pēc noklusējuma parāda visu kategoriju skaitu no izvēlētā mainīgā lieluma.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `(string|Factor) (required)`: mainīgais lielums, lai parādītu. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __summaryVariable__ | `string`: neobligātais mainīgais lielums, kura summu parādīt katrai `mainīgo` kategorijai.. Default: `none`.


## Piemēri

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
