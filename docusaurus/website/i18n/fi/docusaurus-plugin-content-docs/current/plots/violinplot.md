---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Viulun juoni.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `string (required)`: muuttuja näyttää. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __showBox__ | `boolean`: valvoo, näytetäänkö laatikkodiagrammi sisällä. Default: `false`.


## Esimerkkejä

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
