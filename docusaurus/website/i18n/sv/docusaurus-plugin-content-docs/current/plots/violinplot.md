---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

En violinkomplott.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `string (required)`: variabel för att visa. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __showBox__ | `boolean`: kontrollerar om en boxplot ska visas inuti. Default: `false`.


## Exempel

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
