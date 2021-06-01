---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Děj houslí.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: proměnná pro zobrazení. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __showBox__ | `boolean`: řídí, zda se má zobrazit krabicový graf uvnitř. Default: `false`.


## Příklady

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
