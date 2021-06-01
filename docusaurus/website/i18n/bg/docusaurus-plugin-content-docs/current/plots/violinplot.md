---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Сюжет за цигулка.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: променлива за показване. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __showBox__ | `boolean`: контролира дали да се показва бокс плот вътре. Default: `false`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Show Boxplot', value: 'showBox' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Drugs"
/>
```
</TabItem>

<TabItem value="showBox">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    showBox
/>
```

</TabItem>

</Tabs>
